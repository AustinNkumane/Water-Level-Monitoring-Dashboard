from flask import Flask, request, jsonify
from flask import render_template


app = Flask(__name__)


# Sample data for demonstration
alarm_events = [
    {"event": "Low Water Level", "time_occurred": "2023-10-31 09:00:00"},
    {"event": "High Flow Rate", "time_occurred": "2023-10-31 09:15:00"},
    {"event": "Pump Overload", "time_occurred": "2023-10-31 09:30:00"},
]


# Calling landing page
@app.route('/')
def landing():
    return render_template('landing_page.html')


# Login page
@app.route('/login')
def login():
    return render_template('login_page.html')


# Register page
@app.route('/register')
def register():
    return render_template('register_page.html')


# Calling dashboard page
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/alarms')
def alarms():
    return render_template('alarms_page.html', alarm_events=alarm_events)


# script for communication
# Route to receive data from ESP32
@app.route('/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    # Process data from ESP32
    # You can store the data in a database or take any required action
    return jsonify({'message': 'Data received successfully'})

# Route to send commands to ESP32
@app.route('/control', methods=['POST'])
def send_command():
    command = request.get_json()
    # Send the control command to the ESP32
    # You can use a library like Requests to make HTTP requests to the ESP32
    return jsonify({'message': 'Command sent successfully'})


if __name__ == '__main__':
    app.run(debug=True)