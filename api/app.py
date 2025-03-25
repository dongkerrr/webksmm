from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import os
import json


app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("base.html")

@app.get('/<path:path>')
def catch_all(path):
    if path.startswith('static/') or path.startswith('images/'):
        return app.send_static_file(path)
    return render_template("base.html")


if __name__ == "__main__":
    app.run(debug=True)
