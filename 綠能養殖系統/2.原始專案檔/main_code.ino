#include <DNSServer.h>
#include <ESPUI.h>

const byte DNS_PORT = 53;
IPAddress apIP(192, 168, 4, 1);
DNSServer dnsServer;
#include <OneWire.h> 
#include <DallasTemperature.h> 
#include <WiFiClientSecure.h>
#define DQ_Pin 26

#if defined(ESP32)
#include <WiFi.h>
#else
// esp8266
#include <ESP8266WiFi.h>
#include <umm_malloc/umm_heap_select.h>
#ifndef MMU_IRAM_HEAP
#warning Try MMU option '2nd heap shared' in 'tools' IDE menu (cf. https://arduino-esp8266.readthedocs.io/en/latest/mmu.html#option-summary)
#warning use decorators: { HeapSelectIram doAllocationsInIRAM; ESPUI.addControl(...) ... } (cf. https://arduino-esp8266.readthedocs.io/en/latest/mmu.html#how-to-select-heap)
#warning then check http://<ip>/heap
#endif // MMU_IRAM_HEAP
#ifndef DEBUG_ESP_OOM
#error on ESP8266 and ESPUI, you must define OOM debug option when developping
#endif
#endif

//const char* ssid = "22002"; //wifi跟密碼記得改
//const char* password = "52637834";

const char* hostname = "Green-feeding-system";

int statusLabelId;
int graphId; //溫度曲線
int graphwaterId; //水面高度曲線
int millisLabelId; //溫度數字顯示
int millisLabel12Id; //溫度數字顯示
int testSwitchId;
int trigPin=18; //發出聲波腳位(ESP32 GPIO18)
int echoPin=19; //接收聲波腳位(ESP32 GPIO19)

//請修改以下參數--------------------------------------------
char SSID[] = "hello";
char PASSWORD[] = "0000000000";
String Linetoken = "DkX3k2CQ8bnFfjV46xyAFcHs3HBVz86xRj8znXPOTGL";

//---------------------------------------------------------
WiFiClientSecure client;//網路連線物件
char host[] = "notify-api.line.me";//LINE Notify API網址



OneWire oneWire(DQ_Pin);
DallasTemperature sensors(&oneWire);


void buttonCallback(Control* sender, int type)
{
    switch (type)
    {
    case B_DOWN:
        Serial.println("Button DOWN");
        //ESPUI.clearGraph(graphId);
        //ESPUI.addGraphPoint(graphId, random(1, 50));
        
        break;

    case B_UP:
        Serial.println("Button UP");
        break;
    }
}


void setup(void)
{
    ESPUI.setVerbosity(Verbosity::VerboseJSON);
    pinMode(trigPin, OUTPUT);
    Serial.begin(115200);
   

    //連線到指定的WiFi SSID
  Serial.print("Connecting Wifi: ");
  Serial.println(SSID);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  //連線成功，顯示取得的IP
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  IPAddress ip = WiFi.localIP();
  Serial.println(ip);
  client.setInsecure();//ESP32核心 1.0.6以上




#if defined(ESP32)
    WiFi.setHostname(hostname);
#else
    WiFi.hostname(hostname);
#endif

    // try to connect to existing network
    //WiFi.begin(ssid, password);
    //WiFi.begin(, password);
    Serial.print("\n\nTry to connect to existing network");

    {
        uint8_t timeout = 10;

        // Wait for connection, 5s timeout
        do
        {
            delay(500);
            Serial.print(".");
            timeout--;
        } while (timeout && WiFi.status() != WL_CONNECTED);

        // not connected -> create hotspot
        if (WiFi.status() != WL_CONNECTED)
        {
            Serial.print("\n\nCreating hotspot");

            WiFi.mode(WIFI_AP);
            delay(100);
            WiFi.softAPConfig(apIP, apIP, IPAddress(255, 255, 255, 0));
#if defined(ESP32)
            uint32_t chipid = 0;
            for (int i = 0; i < 17; i = i + 8)
            {
                chipid |= ((ESP.getEfuseMac() >> (40 - i)) & 0xff) << i;
            }
#else
            uint32_t chipid = ESP.getChipId();
#endif
            char ap_ssid[25];
            snprintf(ap_ssid, 26, "ESPUI-%08X", chipid);
            WiFi.softAP(ap_ssid);

            timeout = 5;

            do
            {
                delay(500);
                Serial.print(".");
                timeout--;
            } while (timeout);
        }
    }

    dnsServer.start(DNS_PORT, "*", apIP);

    Serial.println("\n\nWiFi parameters:");
    Serial.print("Mode: ");
    Serial.println(WiFi.getMode() == WIFI_AP ? "Station" : "Client");
    Serial.print("IP address: ");
    Serial.println(WiFi.getMode() == WIFI_AP ? WiFi.softAPIP() : WiFi.localIP());

#ifdef ESP8266
    { HeapSelectIram doAllocationsInIRAM;
#endif

    //ESPUI.button("Push Button", &buttonCallback, ControlColor::Peterriver, "Press");
    //statusLabelId = ESPUI.label("Status:", ControlColor::Turquoise, "Stop");
    millisLabelId = ESPUI.label("魚塭即時溫度", ControlColor::Wetasphalt, "0"); //顯示及時溫度
    graphId = ESPUI.graph("魚塭溫度紀錄", ControlColor::Emerald);
    millisLabel12Id = ESPUI.label("水面即時高度", ControlColor::Wetasphalt, "0"); //顯示水面高度
    graphwaterId = ESPUI.graph("魚塭水面高度紀錄", ControlColor::Peterriver);

    ESPUI.begin("綠能養殖系統");
    sensors.begin();
    pinMode(25, OUTPUT);

#ifdef ESP8266
    } // HeapSelectIram
#endif
}

void loop(void)
{
    dnsServer.processNextRequest();

    unsigned long d=ping()/58; //計算距離
    Serial.print(40-d);
    Serial.println("cm");

    Serial.print("Temperatures --> ");
    sensors.requestTemperatures();
    Serial.println(sensors.getTempCByIndex(0));
    delay(2000);

    float x ; //溫度
    x = sensors.getTempCByIndex(0);


  
     ESPUI.print(millisLabelId, String(x)); //顯示及時溫度
     ESPUI.addGraphPoint(graphId, x); //顯示溫度曲線
     ESPUI.print(millisLabel12Id, String(40-d)); //顯示及時溫度
     ESPUI.addGraphPoint(graphwaterId, 40-d); //顯示水面高度曲線
      //設定觸發LINE訊息條件為溫度超過30
  if ( x < 25 ) {
    digitalWrite(25, HIGH);         // 繼電器高電位
    //analogWrite(Red,255);           //RGB亮紅燈
   // analogWrite(Green,0);
   // analogWrite(Blue,0);
    delay(1000);
    //組成Line訊息內容
    String message = "檢測魚塭溫度發生異常，請協助儘速派人查看處理，目前環境狀態：";
    message += "\n溫度=" + String(x) + " *C";
    Serial.println(message);
    if (client.connect(host, 443)) {
      int LEN = message.length();
      //傳遞POST表頭
      String url = "/api/notify";
      client.println("POST " + url + " HTTP/1.1");
      client.print("Host: "); client.println(host);
      //權杖
      client.print("Authorization: Bearer "); client.println(Linetoken);
      client.println("Content-Type: application/x-www-form-urlencoded");
      client.print("Content-Length: "); client.println( String((LEN + 8)) );
      client.println();      
      client.print("message="); client.println(message);
      client.println();
      //等候回應
      delay(2000);
      String response = client.readString();
      //顯示傳遞結果
      Serial.println(response);
      client.stop(); //斷線，否則只能傳5次
    }
    else {
      //傳送失敗
      Serial.println("connected fail");
    }
  }
  //每5秒讀取一次溫濕度
 //delay(5000);
  
    if (x >27){                   //溫度高於30度，停止加熱
    digitalWrite(25, LOW);          // 繼電器低電位
    //analogWrite(Red,0);      
   // analogWrite(Green,255);         //RGB亮綠燈
   // analogWrite(Blue,0);
    delay(1000); 
  }
  if (d > 5 ) {
    delay(1000);
    //組成Line訊息內容
    String message = "檢測魚塭水面高度異常，請協助儘速派人查看處理，目前環境狀態：";
    message += "\n高度=" + String(40-d) + " 公分，低於平均值35公分";
    Serial.println(message);
    if (client.connect(host, 443)) {
      int LEN = message.length();
      //傳遞POST表頭
      String url = "/api/notify";
      client.println("POST " + url + " HTTP/1.1");
      client.print("Host: "); client.println(host);
      //權杖
      client.print("Authorization: Bearer "); client.println(Linetoken);
      client.println("Content-Type: application/x-www-form-urlencoded");
      client.print("Content-Length: "); client.println( String((LEN + 8)) );
      client.println();      
      client.print("message="); client.println(message);
      client.println();
      //等候回應
      delay(2000);
      String response = client.readString();
      //顯示傳遞結果
      Serial.println(response);
      client.stop(); //斷線，否則只能傳5次
    }
    else {
      //傳送失敗
      Serial.println("connected fail");
    }
  } 
        
 
}

unsigned long ping() { 
  digitalWrite(trigPin, HIGH); //啟動超音波
  delayMicroseconds(10);  //sustain at least 10us HIGH pulse
  digitalWrite(trigPin, LOW);  //關閉超音波
  return pulseIn(echoPin, HIGH); //計算傳回時間
 }
