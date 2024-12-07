import React from 'react';
import { TextReveal } from './TextReveal';
import { BackgroundMusic } from './BackgroundMusic';
import { Heart } from 'lucide-react';

const birthdayMessage = `Daqui a exatamente 9 horas e 42 minutos, no ano de 1999, nasceu uma das pessoas mais importantes da minha vida, alguém que ocupa um lugar especial no meu coração. 😊

Nos conhecemos há dois anos, mas foi neste último ano que realmente nos conectamos de uma forma única. Confesso que, no início, tive alguns medos e receios, mas decidi deixar tudo isso de lado. Hoje, olho para trás e vejo que foi uma das melhores escolhas que já fiz. Não poderia estar mais grato por ter você na minha vida.

Você é incrível de tantas maneiras! Doce, bonita, linda, gostosa kk, carismática, inteligente, generosa, maravilhosa, cheia de luz (posso escrever uma bíblia só de elogios). Quero que você saiba que essas qualidades fazem de você alguém indispensável para quem tem a sorte de te conhecer. Nunca deixe de ser essa pessoa maravilhosa que ilumina os dias de quem está ao seu redor. 💖

Hoje é o seu dia, e eu espero que ele seja tão especial quanto você merece. Não só hoje, mas em todos os dias da sua vida, desejo que a felicidade, a saúde, o amor e as conquistas te acompanhem. Torço para que este novo ciclo seja cheio de momentos inesquecíveis e repleto de realizações.

Ah, e como esquecer do "Zélio" no ano passado? Foi só para arrancar aquele sorriso que tanto gosto de ver. 😄 Quem sabe eu não invente algo ainda mais criativo este ano?

Parabéns pelo seu dia, e que ele seja tão incrível quanto você é para mim. 🎉🎂✨`;

export function BirthdayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      <BackgroundMusic />
      
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1464347744102-11db6282f854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Birthday celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-4 text-pink-500 animate-pulse" />
            <h1 className="text-6xl mb-4 font-pacifico">Feliz Aniversário!</h1>
            <p className="text-2xl font-dancing">Com muito amor ❤️</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <TextReveal text={birthdayMessage} delay={50} />
        </div>
      </div>
    </div>
  );
}