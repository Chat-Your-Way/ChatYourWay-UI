import { useEffect, useRef, useState } from 'react';
import WhiteLayout from '../../ui-kit/components/WhiteLayout/WhiteLayout';
import {
  TextBox,
  Logo,
  LoginAccountButton,
  VerificationEmailTitle,
  VerificationEmailWrapper,
  VerificationEmailSubTitle,
  VerificationEmailParagraph,
  VerificationEmailSubParagraph,
} from './VerificationEmailPageComponent.styled';

function VerificationEmailPageComponent() {
  const timerIdRef = useRef(null);
  // const sendEmailCount = useRef(1);
  const timerValue = useRef(30);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (!timerIdRef.current) {
      return;
    }

    return () => {
      if (isTimerActive) {
        timerValue.current = 30;
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    };
  }, [isTimerActive]);

  const sendEmailAgain = () => {
    if (isTimerActive) {
      return;
    } else {
      setIsTimerActive(true);
      timerIdRef.current = setInterval(() => {
        if (timerValue.current === 0) {
          setIsTimerActive(false);
          return;
        } else {
          timerValue.current -= 1;
        }
      }, 1000);
    }
  };

  return (
    <WhiteLayout>
      <VerificationEmailWrapper>
        <Logo />
        <VerificationEmailTitle variant="h2">
          Реєстрація пройшла успішно
        </VerificationEmailTitle>
        <VerificationEmailSubTitle variant="h3">
          Вітаємо!
        </VerificationEmailSubTitle>
        <TextBox>
          <VerificationEmailParagraph variant="p">
            Вам на пошту прийшов лист із підтвердженням про реєстрацію. Для того
            щоб продовжити користуватись застосунком перейдіть, будь ласка, за
            посиланням, що вказана у листі.
          </VerificationEmailParagraph>
          <VerificationEmailSubParagraph variant="p">
            Не прийшов лист? Перевірте, будь ласка, спам.
          </VerificationEmailSubParagraph>
        </TextBox>
        <LoginAccountButton
          label="Відправити ще раз"
          handleClick={sendEmailAgain}
        />
      </VerificationEmailWrapper>
    </WhiteLayout>
  );
}

export default VerificationEmailPageComponent;
