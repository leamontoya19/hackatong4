from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Diccionario de traducciones para la selección de idioma
language_selection = {
    "es": ("¿En qué idioma quieres que te enseñe español? "
           "(árabe, rumano, ucraniano, inglés, español)"),
    "en": ("In which language do you want me to teach you Spanish? "
           "(Arabic, Romanian, Ukrainian, English, Spanish)"),
    "ar": ("بأي لغة تريد أن أعلمك الإسبانية؟ "
           "(العربية، الرومانية، الأوكرانية، الإنجليزية، الإسبانية)"),
    "ro": ("În ce limbă vrei să te învăț spaniolă? "
           "(arabă, română, ucraineană, engleză, spaniolă)"),
    "uk": ("Якою мовою ви хочете, щоб я навчав вас іспанської? "
           "(арабська, румунська, українська, англійська, іспанська)")
}

# Lecciones de español nivel A1
spanish_lessons_a1 = {
    "es": [
        "Hola, ¿cómo estás? - Significa 'Hello, how are you?'",
        "Me llamo... - Se usa para decir 'My name is...'",
        "Gracias - Significa 'Thank you'",
        "Por favor - Significa 'Please'",
        "Los números del 1 al 5 son: uno, dos, tres, cuatro, cinco"
    ],
    "en": [
        "Hola, ¿cómo estás? - Means 'Hello, how are you?'",
        "Me llamo... - Is used to say 'My name is...'",
        "Gracias - Means 'Thank you'",
        "Por favor - Means 'Please'",
        "Numbers from 1 to 5 are: uno, dos, tres, cuatro, cinco"
    ],
    "ar": [
        "Hola, ¿cómo estás? - تعني 'مرحبا، كيف حالك؟'",
        "Me llamo... - تستخدم لقول 'اسمي هو...'",
        "Gracias - تعني 'شكرا لك'",
        "Por favor - تعني 'من فضلك'",
        "الأرقام من 1 إلى 5 هي: uno, dos, tres, cuatro, cinco"
    ],
    "ro": [
        "Hola, ¿cómo estás? - Înseamnă 'Bună, ce mai faci?'",
        "Me llamo... - Se folosește pentru a spune 'Numele meu este...'",
        "Gracias - Înseamnă 'Mulțumesc'",
        "Por favor - Înseamnă 'Te rog'",
        "Numerele de la 1 la 5 sunt: uno, dos, tres, cuatro, cinco"
    ],
    "uk": [
        "Hola, ¿cómo estás? - Означає 'Привіт, як справи?'",
        "Me llamo... - Використовується, щоб сказати 'Мене звати...'",
        "Gracias - Означає 'Дякую'",
        "Por favor - Означає 'Будь ласка'",
        "Числа від 1 до 5: uno, dos, tres, cuatro, cinco"
    ]
}

user_language = None


@app.route('/start', methods=['GET'])
def start_chat():
    global user_language
    user_language = None
    return jsonify({'message': language_selection['es']})


@app.route('/set_language', methods=['POST'])
def set_language():
    global user_language
    language = request.json['language'].lower()
    if language in ['árabe', 'arabic', 'العربية', 'arabă', 'арабська']:
        user_language = 'ar'
    elif language in ['rumano', 'romanian', 'الرومانية', 'română',
                      'румунська']:
        user_language = 'ro'
    elif language in ['ucraniano', 'ukrainian', 'الأوكرانية', 'ucraineană',
                      'українська']:
        user_language = 'uk'
    elif language in ['inglés', 'english', 'الإنجليزية', 'engleză',
                      'англійська']:
        user_language = 'en'
    elif language in ['español', 'spanish', 'الإسبانية', 'spaniolă',
                      'іспанська']:
        user_language = 'es'
    else:
        return jsonify({
            'message': 'Idioma no reconocido. Por favor, elige entre'
            'árabe,rumano, ucraniano, inglés o español.'
        })

    return jsonify({
        'message': f'Perfecto, usaremos {language}.'
        'Comencemos con la primera lección de español.'})


@app.route('/get_lesson', methods=['POST'])
def get_lesson():
    global user_language
    if not user_language:
        return jsonify({'message': 'Por favor, selecciona un idioma primero.'})

    lesson = random.choice(spanish_lessons_a1[user_language])
    return jsonify({'message': lesson})


if __name__ == '__main__':
    app.run(debug=True)
