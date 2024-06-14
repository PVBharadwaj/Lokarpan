# Lokarpan-website

## Backend Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/PVBharadwaj/lokarpan-backend.git
    cd lokarpan-backend
    ```

2. **Install Dependencies**

    ```bash
    pip install -r requirements.txt
    ```

3. **Set Environment Variables and Install Django**

    ```bash
    python -m venv env
    source env/bin/activate  # For Unix/Linux
    .\env\Scripts\activate   # For Windows
    pip install django
    ```

4. **Migrate the Models**

    ```bash
    python manage.py migrate
    python manage.py makemigrations
    ```

5. **Ensure Django Rest Framework and CORS-Headers are Installed**

    If not installed, run the following commands:

    ```bash
    pip install djangorestframework
    pip install django-cors-headers
    ```

6. **Run the Server**

    ```bash
    python manage.py runserver
    ```

7. **Verify Correct Path**

    Ensure that the path of the browser is correct. Refer to `urls.py` -> `urlPatterns` for the correct path.

## Frontend Setup

The frontend for Lokarpan is available at [Lokarpan Website](https://github.com/PVBharadwaj/lokarpan-website). If the repository is empty, clone the above repo into that folder and follow the steps below.

1. **Clone the Frontend Repository**

    ```bash
    git clone https://github.com/PVBharadwaj/lokarpan-website.git
    cd lokarpan-website
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Frontend Server**

    ```bash
    npm start
    ```


**Other Data**

Database engine: sqlite3
Django version: 5.0.2
