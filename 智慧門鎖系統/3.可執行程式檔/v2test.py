import cv2
import time
import requests
import threading
import os
import firebase_admin
from firebase_admin import credentials, storage
import subprocess
class FaceRecognition:
    def __init__(self, camera_index=1):
        self.camera = cv2.VideoCapture(camera_index)
        cred = credentials.Certificate('C:\git\speaker-recognition-py3/newlock-c403a-firebase-adminsdk-qnx55-b8899e8ae9.json')
        firebase_admin.initialize_app(cred, {'storageBucket': 'newlock-c403a.appspot.com'})
        if not self.camera.isOpened():
            print(f"Cannot open camera {camera_index}")
            exit()
        
        self.recognizer = cv2.face.LBPHFaceRecognizer_create()
        self.recognizer.read('face.yml')
        self.cascade_path = "xml/haarcascade_frontalface_default.xml"
        self.face_cascade = cv2.CascadeClassifier(self.cascade_path)
        self.lock = threading.Lock()
        self.cv_window_created = False
        self.data = "0"
        self.allow_data_retrieval = True  # 控制是否允许获取数据
        self.recognition_paused = False  # 控制是否暂停识别
        self.save_path = 'C:/git/speaker-recognition-py3/faces'  # 用于保存图片的文件夹
        os.makedirs(self.save_path, exist_ok=True)
        self.name = {
                    '1': 'stone'
                }
        self.last_upload_time = time.time()

    def start_recognition(self):
        self.capture_thread = threading.Thread(target=self._capture_thread)
        self.capture_thread.start()

    def stop_recognition(self):
        self.data = "0"  # 停止人脸识别

    def set_data(self, data):
        self.data = data
    def save_to_txt(self, name, current_time):
        with open("TIME.txt", "a") as txt_file:
            txt_file.write(f"{current_time} - {name}\n")
    def save_face_image(self, gray, x, y, w, h):
        # 获取当前时间的 struct_time 对象
        current_time = time.localtime()

        # 从当前时间中提取年、月和日
        year = time.strftime("%Y", current_time)
        month = time.strftime("%m", current_time)
        day = time.strftime("%d", current_time)

        # 创建年、月和日的目录，如果它们不存在的话
        year_path = os.path.join(self.save_path, year)
        month_path = os.path.join(year_path, month)
        day_path = os.path.join(month_path, day)

        os.makedirs(day_path, exist_ok=True)  # 如果目录不存在，则创建目录

        # 使用当前时间创建文件名
        file_name = f'{time.strftime("%Y%m%d%H%M%S", current_time)}.jpg'

        # 创建完整的文件路径
        file_path = os.path.join(day_path, file_name)

        # 保存图像到文件路径
        cv2.imwrite(file_path, gray[y:y + h, x:x + w])

        # 上传图像到 Firebase
        self.upload_image_to_firebase(file_path, current_time)

    def upload_image_to_firebase(self, image_path, current_time):
        bucket = storage.bucket()
        year = time.strftime("%Y", current_time)
        month = time.strftime("%m", current_time)
        day = time.strftime("%d", current_time)
        current_time = time.strftime("%Y%m%d%H%M%S")
    # 构建子目录路径
        subfolder_path = f'{year}/{month}/{day}'
        blob = bucket.blob(f'passed/{subfolder_path}/{current_time}')  # 替换为你想在存储桶中保存图片的路径

            # 上传图片
        blob.upload_from_filename(image_path)

            # 获取上传后的公开 URL
        image_url = blob.public_url
        print("已經上傳，URL:", image_url)
    def _capture_thread(self):
        while True:
            if self.cv_window_created:
                cv2.destroyAllWindows()
                self.cv_window_created = False

            ret, img = self.camera.read()
            if not ret:
                print("Cannot receive frame")
                time.sleep(3)
                break

            img = cv2.resize(img, (640, 360))
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

            text = '???'
            name = {
        '1': 'stone'
    }
            if self.data == "1":
                if not self.recognition_paused:
                    faces = self.face_cascade.detectMultiScale(gray)

                    if faces is not None:
                        for (x, y, w, h) in faces:
                            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
                            idnum, confidence = self.recognizer.predict(gray[y:y + h, x:x + w])

                            if confidence < 70:
                                self.save_face_image(gray, x, y, w, h)
                                text = self.name.get(self.data, '???')
                                self.allow_data_retrieval = True
                                self.recognition_paused = True
                                print("開始錄音3秒...")
                                time.sleep(2)
                                result = subprocess.run(['python', 'voicetake.py'], stdout=subprocess.PIPE, text=True)
                                output = result.stdout.strip()
                                print(output)
                                text = name.get(str(idnum), '???')
                                self.set_data("0")
                                result = subprocess.run(['python', 'speaker-recognition.py', '-t', 'predict', '-i', 'output_1.5to2.wav', '-m', 'model.out'], stdout=subprocess.PIPE, text=True)
                                output = result.stdout.strip()
                                name_score = output.split('->')[-2].strip()
                                vname = name_score.split(',')[0].strip()
                                if vname == name.get(str(idnum), '???'):
                                    print("Welcome " + name.get(str(idnum), '???')) 
                                    output = result.stdout.strip()
                                    server_address = "sgp1.blynk.cloud"
                                    token = "YoUz1SxCgGEAad_0kUa91ABoqgH_OoWt"
                                    url = f"https://{server_address}/external/api/update?token={token}&pin=V0&value=1"
                                    response = requests.get(url)
                                    current_time = time.strftime("%Y-%m-%d %H:%M:%S")
                                    with open("TIME.txt", "a") as txt_file:
                                        txt_file.write(f"{current_time} - {name}\n")
                                    # 讀取 TIME.txt 的內容
                                    with open("TIME.txt", "r") as txt_file:
                                        data_to_upload = txt_file.read()
                                    bucket = storage.bucket()
                                    blob = bucket.blob(f'timerecord/time.txt')
                                    # 上传文字檔
                                    blob.upload_from_string(data_to_upload)

                                    # 获取上传后的公开 URL
                                    text_file_url = blob.public_url
                                    print("已經上傳，URL:", text_file_url)
                                    print("Welcome " + text)
                                else:
                                    print("mistake, try later.")
                            else:
                                text = '???'
                                bucket = storage.bucket()
                                current_time_struct = time.localtime()
                                year = time.strftime("%Y", current_time_struct)
                                month = time.strftime("%m", current_time_struct)
                                day = time.strftime("%d", current_time_struct)
                                current_time_str = time.strftime("%Y%m%d%H%M%S")       
                                time_difference = time.time() - self.last_upload_time
                                # 如果時間間隔大於2秒，則進行上傳
                                if time_difference > 2:
                                    # 直接將圖片二進制數據上傳
                                    blob = bucket.blob(f'doorphoto/{current_time_str}')
                                    blob.upload_from_string(cv2.imencode('.jpg', gray[y:y + h, x:x + w])[1].tobytes(), content_type='image/jpg')
                                    
                                    image_url = blob.public_url
                                    print("已經上傳，URL:", image_url)
                                    
                                    # 更新上傳時間
                                    self.last_upload_time = time.time()
                                    
                                    print("mistake, try later.")
                                else:
                                    print("兩秒內不重複上傳")

                                cv2.putText(img, text, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

                else:
                    # 如果 self.data 不為 "1"，則將 self.recognition_paused 設置為 True，防止進入人臉辨識的邏輯
                    self.recognition_paused = True

            cv2.imshow('test', img)
            key = cv2.waitKey(5)
            if key == ord('q'):
                break

        with self.lock:
            self.cv_window_created = False

def main():
    face_recognition = FaceRecognition()
    face_recognition.start_recognition()

    while True:
        token = "YoUz1SxCgGEAad_0kUa91ABoqgH_OoWt"
        pin = "V1"
        url = f"https://sgp1.blynk.cloud/external/api/get?token={token}&{pin}"
        response = requests.get(url)
        
        if response.status_code == 200:
            data = response.text
            face_recognition.set_data(data)
            
            # 檢查 self.data 是否為 "1"，如果是，啟動人臉辨識
            if data == "1":
                face_recognition.recognition_paused = False
        else:
            print(f"無法獲取數據。狀態碼: {response.status_code}")
            time.sleep(1)


if __name__ == "__main__":
    main()