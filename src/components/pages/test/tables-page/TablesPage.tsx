import { XMarkIcon } from '@heroicons/react/24/outline';

import Table from '@/components/common/composite/table/Table';
import { CustomCheck } from '@/components/common/custom-svg/CustomCheck';
import AlertButton, {
  AlertButtonVariant,
} from '@/components/common/ui/alert-button/AlertButton';
import { IconButtonSize } from '@/components/common/ui/icon-button/IconButton';
import { TrashBucketButton } from '@/components/common/ui/icon-button/variants';
import Tag, {
  TagColor,
  TagSize,
  TagVariant,
} from '@/components/common/ui/tag/Tag';

import styles from '../test-pages.module.scss';

const TablesPage = () => {
  const fields = [
    {
      avatar: 'avatar.png',
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      tag: (
        <Tag
          size={TagSize.SMALL}
          text="Зам. староста"
          variant={TagVariant.DARKER}
          color={TagColor.PRIMARY}
        />
      ),
      // checkbox: <Checkbox label="Зам. староста" />,
      //action={<AlertButton text="Прийняти" icon={<CustomCheck/>} iconPosition={AlertButtonIconPosition.RIGHT} onClick={() => {}} isDisabled={false} type={AlertButtonType.SUCCESS}/>}
      secondButton: <TrashBucketButton size={IconButtonSize.MEDIUM} />,
    },
    {
      avatar: 'stars-full.svg',
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      //tag: <Tag state={TagState.SMALL} text="Зам. староста" className="primary-second" />,
      //checkbox: <Check state={CheckboxState.DEFAULT} text="Зам. староста" />,
      firstButton: (
        <AlertButton
          text="Прийняти"
          startIcon={<CustomCheck />}
          variant={AlertButtonVariant.SUCCESS}
        />
      ),
      secondButton: (
        <AlertButton
          startIcon={<XMarkIcon className="icon" />}
          variant={AlertButtonVariant.ERROR_OUTLINE}
        />
      ),
    },
    {
      avatar: 'stars-empty.svg',
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      tag: (
        <Tag
          size={TagSize.SMALL}
          text="Зам. староста"
          variant={TagVariant.DARKER}
          color={TagColor.PRIMARY}
        />
      ),
      // checkbox: <Checkbox label="Зам. староста" />,
      //action={<AlertButton text="Прийняти" icon={<CustomCheck/>} iconPosition={AlertButtonIconPosition.RIGHT} onClick={() => {}} isDisabled={false} type={AlertButtonType.SUCCESS}/>}
      secondButton: <TrashBucketButton size={IconButtonSize.MEDIUM} />,
    },

    {
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      tag: (
        <Tag
          size={TagSize.SMALL}
          text="Зам. староста"
          variant={TagVariant.DARKER}
          color={TagColor.PRIMARY}
        />
      ),
      // checkbox: <Checkbox label="Зам. староста" />,
      firstButton: (
        <AlertButton
          text="Прийняти"
          startIcon={<CustomCheck />}
          variant={AlertButtonVariant.SUCCESS}
        />
      ),
      secondButton: <TrashBucketButton size={IconButtonSize.MEDIUM} />,
    },
    {
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      tag: (
        <Tag
          size={TagSize.SMALL}
          text="Зам. староста"
          variant={TagVariant.DARKER}
          color={TagColor.PRIMARY}
        />
      ),
      // checkbox: <Checkbox label="Зам. староста" />,
      firstButton: (
        <AlertButton
          text="Прийняти"
          startIcon={<CustomCheck />}
          variant={AlertButtonVariant.SUCCESS}
        />
      ),
      secondButton: <TrashBucketButton size={IconButtonSize.MEDIUM} />,
    },
    {
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      //tag: <Tag state={TagState.SMALL} text="Зам. староста" className="primary-second" />,
      // checkbox: <Checkbox label="Зам. староста" />,
      firstButton: (
        <AlertButton
          text="Прийняти"
          startIcon={<CustomCheck />}
          variant={AlertButtonVariant.SUCCESS}
        />
      ),
      secondButton: (
        <AlertButton
          text="Прийняти"
          startIcon={<CustomCheck />}
          variant={AlertButtonVariant.SUCCESS}
        />
      ),
    },
    {
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      tag: (
        <Tag
          size={TagSize.SMALL}
          text="Зам. староста"
          variant={TagVariant.DARKER}
          color={TagColor.PRIMARY}
        />
      ),
    },
    {
      email: 'elizabeth.yarmolenko@gmail.com',
      fullName: 'Ярмоленко Єлизавета Миколаївна',
      tag: (
        <Tag
          size={TagSize.SMALL}
          text="Зам. староста"
          variant={TagVariant.DARKER}
          color={TagColor.PRIMARY}
        />
      ),
    },
  ];
  return (
    <div className={styles['test-page-wrap']}>
      <div className={styles['test-page-content']}>
        <Table fields={fields} />
      </div>
    </div>
  );
};

export default TablesPage;