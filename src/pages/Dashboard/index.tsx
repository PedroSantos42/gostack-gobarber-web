import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Logomarca de GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>

        <Content>
          <Schedule>
            <h1>Horários agendados</h1>
            <p>
              <span>Hoje</span>
              <span>Dia 06</span>
              <span>Segunda-feira</span>
            </p>

            <NextAppointment>
              <strong>Atendimento a seguir</strong>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/38994990?s=460&u=b174c927aaba3366449ce0fcfa1a0e0d07e25fae&v=4"
                  alt="Pedro Santos"
                />

                <strong>Pedro Santos</strong>
                <span>
                  <FiClock />
                  08:00
                </span>
              </div>
            </NextAppointment>

            <Section>
              <strong>Manhã</strong>

              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src="https://avatars3.githubusercontent.com/u/38994990?s=460&u=b174c927aaba3366449ce0fcfa1a0e0d07e25fae&v=4"
                    alt="Pedro Santos"
                  />

                  <strong>Pedro Santos</strong>
                </div>
              </Appointment>

              <strong>Tarde</strong>

              <Appointment>
                <span>
                  <FiClock />
                  13:00
                </span>

                <div>
                  <img
                    src="https://avatars3.githubusercontent.com/u/38994990?s=460&u=b174c927aaba3366449ce0fcfa1a0e0d07e25fae&v=4"
                    alt="Pedro Santos"
                  />

                  <strong>Pedro Santos</strong>
                </div>
              </Appointment>

              <Appointment>
                <span>
                  <FiClock />
                  14:00
                </span>

                <div>
                  <img
                    src="https://avatars3.githubusercontent.com/u/38994990?s=460&u=b174c927aaba3366449ce0fcfa1a0e0d07e25fae&v=4"
                    alt="Pedro Santos"
                  />

                  <strong>Pedro Santos</strong>
                </div>
              </Appointment>
            </Section>
          </Schedule>
          <Calendar />
        </Content>
      </Header>
    </Container>
  );
};

export default Dashboard;
