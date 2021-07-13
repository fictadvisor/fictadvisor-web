import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';
import Divider from '../../components/ui/Divider';
import pluralize from '../../lib/pluralize';

export enum QueuePositionState {
  Pending = 'pending',
  Waiting = 'waiting',
  Processing = 'processing',
};

export type QueuePlacementProperties = {
  position?: number;
  state: QueuePositionState;
  code: string;
};

const positionStateMessages = {
  [QueuePositionState.Pending]: ({ placement }: QueueBlockProperties) => 
    <div className="c-secondary">
      Ти зараз знаходишся на <span className="c-primary f-medium">{placement.position + 1}</span> позиції у черзі
      <br/>
      Зачекай на повідомлення про те, що тебе очікують, або слідкуй самостійно за своїм персональним номером — <span className="c-primary f-medium">{placement.code}</span>
    </div>,
  [QueuePositionState.Waiting]: ({ placement }: QueueBlockProperties) => 
    <div className="c-secondary">
      Тебе вже очікують, твій персональний номер — <span className="c-primary f-medium">{placement.code}</span>
    </div>,
  [QueuePositionState.Processing]: ({ placement }: QueueBlockProperties) => 
    <div className="c-secondary">
      Твоя заявка вже оброблюється, твій персональний номер — <span className="c-primary f-medium">{placement.code}</span>
    </div>,
};

const QueueBlockContent = (props: QueueBlockProperties) => {
  const { description, placement } = props;

  return (
    <>
      <div className="queue-block-content">
        {
          placement 
            ? 
            <>
              {positionStateMessages[placement.state](props)}
              {
                placement.state === QueuePositionState.Pending &&
                <Button className="w-full" style={{ marginTop: '24px' }}>
                  Вийти з черги
                </Button>
              }
            </>
            : 
            <div>
              <div className="c-secondary">
                {description}
              </div>
              <Button className="w-full" style={{ marginTop: '24px' }}>
                Встати у чергу
              </Button>
            </div>
        }
      </div>
    </>
  );
};

export type QueueBlockProperties = {
  name: string;
  count: number;
  description: string;
  placement?: QueuePlacementProperties;
};

const QueueBlock = (props: QueueBlockProperties) => {
  const { name, placement, count } = props;

  return (
    <div className="queue-block">
      <div className="queue-block-header">
        <div className="f-medium d-flex-grow">
          {name}
        </div>
        <div className="a-r c-secondary a-r-label">
          <span>
            {
              placement 
                ? `#${Math.max(placement.position + 1, 1)}/${count}`
                : `#${count}`
            }
          </span>
        </div>
      </div>
      <QueueBlockContent {...props} />
    </div>
  );
};

const QueuesPage = () => {
  return (
    <PageLayout
      meta={{ title: "Електронна черга" }}
    >
      <p className="title">Попередня реєстрація</p>

      <div>
        <div className="information-block">
          <p>
            Попередня реєстрація допомогає зекономити твій і наш час, прискорюючи процес подачі документів.
          </p>
          <p>
            Усі твої персональні дані, які ти заповниш, шифруються паролем, який буде відомим тільки тобі. 
            Обов'язково запиши або сфотографуй його, він буде необхідний для генерації твоєї заяви під час подачі документів.
          </p>
        </div>
        <Button className="w-full">Пройти попередню реєстрацію</Button>
      </div>

      <p className="title" style={{ marginTop: '25px' }}>Твої черги</p>

      <div className="queue-block-group">
        <QueueBlock description="" name="Подача документів - Програмна інженерія (124)" count={10} placement={{ position: 0, state: QueuePositionState.Processing,  code: '32' }} />
        <QueueBlock description="" name="Подача документів - Інформаційні системи (126)" count={20} placement={{ position: 0, state: QueuePositionState.Waiting,  code: '134' }} />
        <QueueBlock description="" name="Подача документів - Програмна інженерія (123)" count={15} placement={{ position: 12, state: QueuePositionState.Pending,  code: '212' }} />
      </div>
      
      <p className="title" style={{ marginTop: '25px' }}>Доступні черги</p>

      <div className="queue-block-group">
        <QueueBlock description='Електронна черга для подачі документів на спеціальність "Інженерія програмного забезпечення" (121)' name="Подача документів - Інженерія програмного забезпечення (121)" count={43} />
      </div>
    </PageLayout>
  );
};

export default QueuesPage;
