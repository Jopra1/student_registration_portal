from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

cultural_registrations = []
tech_registrations = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/cultural.html', methods=['GET', 'POST'])
def cultural():
    if request.method == 'POST':
        full_name = request.form.get('fullName')
        email = request.form.get('email')
        phone = request.form.get('phone')
        department = request.form.get('department')
        year = request.form.get('year')
        events = request.form.getlist('culturalEvents')
        experience = request.form.get('experience', '')
        requirements = request.form.get('requirements', '')

        if not events:
            flash('Please select at least one event.')
            return redirect(url_for('cultural'))

        registration = {
            'full_name': full_name,
            'email': email,
            'phone': phone,
            'department': department,
            'year': year,
            'events': events,
            'experience': experience,
            'requirements': requirements
        }
        cultural_registrations.append(registration)
        print("Cultural Registrations:", cultural_registrations)
        return redirect(url_for('thank_you'))

    return render_template('cultural.html')

@app.route('/tech.html', methods=['GET', 'POST'])
def tech():
    if request.method == 'POST':
        full_name = request.form.get('fullName')
        email = request.form.get('email')
        phone = request.form.get('phone')
        department = request.form.get('department')
        year = request.form.get('year')
        events = request.form.getlist('techEvents')
        experience = request.form.get('experience', '')
        requirements = request.form.get('requirements', '')

        if not events:
            flash('Please select at least one event.')
            return redirect(url_for('tech'))

        registration = {
            'full_name': full_name,
            'email': email,
            'phone': phone,
            'department': department,
            'year': year,
            'events': events,
            'experience': experience,
            'requirements': requirements
        }
        tech_registrations.append(registration)
        print("Tech Registrations:", tech_registrations)
        return redirect(url_for('thank_you'))

    return render_template('tech.html')

@app.route('/thank-you.html')
def thank_you():
    return render_template('thank-you.html')

if __name__ == '__main__':
    app.run(debug=True)
