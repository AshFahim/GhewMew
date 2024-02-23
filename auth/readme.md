# Auth Microservice

Instruction for the Auth microservice.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AshFahim/GhewMew

   ```

2. create database nameed 'ghewmew'

3. connect it on ./lib/mysql.py

4. install requirements

   ```python
       pip install -r requirements.txt
   ```

5. run uvicorn server with the following command on ./auth folder
   ```python
       uvicorn app:app --reload --port 3500
   ```
