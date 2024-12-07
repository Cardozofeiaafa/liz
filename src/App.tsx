import React, { useState } from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { BirthdayPage } from './components/BirthdayPage';

export default function App() {
  const [showBirthday, setShowBirthday] = useState(false);

  if (showBirthday) {
    return <BirthdayPage />;
  }

  return <CountdownTimer onComplete={() => setShowBirthday(true)} />;
}