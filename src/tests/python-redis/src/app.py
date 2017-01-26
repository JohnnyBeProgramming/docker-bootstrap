import os

from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host=os.getenv('TEST_STORAGE_REDIS', 'redis'), port=6379)

@app.route('/')
def hello():
    count = redis.incr('hits')
    return 'Hello World! I have been seen {} times.\n'.format(count)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)