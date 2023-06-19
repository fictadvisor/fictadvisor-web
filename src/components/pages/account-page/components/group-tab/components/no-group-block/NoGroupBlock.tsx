import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import Alert, { AlertColor } from '@/components/common/ui/alert';
import Button, { ButtonSize } from '@/components/common/ui/button';
import { Checkbox, Dropdown } from '@/components/common/ui/form';
import Loader, { LoaderSize } from '@/components/common/ui/loader';
import { transformGroups } from '@/components/pages/account-page/components/group-tab/components/no-group-block/utils';
import { validationSchema } from '@/components/pages/account-page/components/group-tab/components/no-group-block/validation';
import useAuthentication from '@/hooks/use-authentication';
import GroupAPI from '@/lib/api/group/GroupAPI';
import UserAPI from '@/lib/api/user/UserAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';

import styles from './NoGroupBlock.module.scss';

const NoGroupBlock: FC = () => {
  const { user, update } = useAuthentication();
  const { isLoading, data } = useQuery(['groups'], () => GroupAPI.getAll(), {
    refetchOnWindowFocus: false,
  });
  const dispatch = useDispatch();

  const handleSubmitGroup = async data => {
    try {
      await UserAPI.requestNewGroup(data, user.id);
      update();
    } catch (e) {
      const errorName = e.response.data.error;
      if (errorName === 'AlreadyRegisteredException') {
        dispatch(
          showAlert({
            title: 'В групі вже є староста',
            color: AlertColor.ERROR,
          }),
        );
      } else {
        dispatch(
          showAlert({
            title: 'Як ти це зробив? :/',
            color: AlertColor.ERROR,
          }),
        );
      }
    }
  };

  if (isLoading) return <Loader size={LoaderSize.SMALLEST} />;

  if (!data) return null;

  return (
    <div className={styles['content']}>
      {user.group.state === 'PENDING' ? (
        <>
          <div className={styles['text-content']}>
            <h4>{user.group.code}</h4>
          </div>
          <div className={styles['alert-desktop-pending']}>
            <Alert
              title="Ваша заявка ще не прийнята, очікуйте підтвердження"
              isClosable={false}
              className={styles['alert alert-description']}
            />
          </div>
          <div className={styles['division']}>
            <div className={styles['white']}></div>
            <h4 className={styles['division-text']}>Або виберіть іншу групу</h4>
            <div className={styles['white']}></div>
            <div className={styles['button']}></div>
          </div>
        </>
      ) : (
        <>
          <div className={styles['alert-desktop']}>
            <Alert
              title={'Ваша заявка відхилена'}
              color={AlertColor.ERROR}
              isClosable={false}
              description={'Оберіть іншу групу нижче та надішліть новий запит'}
              className={styles['alert']}
            />
          </div>
          <div className={styles['alert-mobile']}>
            <Alert
              title={'Ваша заявка відхилена'}
              color={AlertColor.ERROR}
              isClosable={false}
              className={styles['alert']}
            />
          </div>
        </>
      )}
      <Formik
        initialValues={{ groupId: '', isCaptain: false }}
        onSubmit={handleSubmitGroup}
        validateOnMount
        validateOnChange
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form>
            <Dropdown
              options={transformGroups(data.groups)}
              label="Група"
              name="groupId"
              placeholder="вибери зі списку"
              className={styles['dropdown']}
            />
            <Checkbox label="Староста" name="isCaptain" />
            <Button
              text="Надіслати запит"
              type="submit"
              size={ButtonSize.SMALL}
              disabled={!isValid}
              className={styles['button-group']}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default NoGroupBlock;
