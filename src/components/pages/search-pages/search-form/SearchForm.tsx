import { Fragment, useState } from 'react';
import { FC } from 'react';
import { useQuery } from 'react-query';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { Form, Formik } from 'formik';
import mergeClassNames from 'merge-class-names';

import {
  Dropdown,
  Input,
  InputSize,
  InputType,
} from '@/components/common/ui/form';
import {
  IconButton,
  IconButtonColor,
  IconButtonShape,
  IconButtonSize,
} from '@/components/common/ui/icon-button';
import { GroupAPI } from '@/lib/api/group/GroupAPI';

import { SubjectSearchFormFields, TeacherSearchFormFields } from './types';

import styles from '../SearchPage.module.scss';

interface SearchFormProps {
  onSubmit: (obj) => void;
  initialValues: SubjectSearchFormFields | TeacherSearchFormFields;
  filterDropDownOptions: { value: string; label: string }[];
  serchPlaceholder: string;
}

export const SearchForm: FC<SearchFormProps> = ({
  onSubmit,
  initialValues,
  filterDropDownOptions,
  serchPlaceholder,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const { data: groupData } = useQuery('all-groups', GroupAPI.getAll, {
    staleTime: Infinity,
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
        onSubmit(values);
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form className={styles['form']}>
          <Input
            onDeterredChange={handleSubmit}
            className={styles['input']}
            size={InputSize.LARGE}
            type={InputType.SEARCH}
            name="search"
            placeholder={serchPlaceholder}
            showRemark={false}
          />
          <div className={styles['collapse-btn']}>
            <IconButton
              className={styles['icon']}
              type="button"
              name="order"
              size={IconButtonSize.LARGE}
              shape={IconButtonShape.SQUARE}
              color={IconButtonColor.SECONDARY}
              icon={collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
              onClick={() => setCollapsed(pr => !pr)}
            />
          </div>

          {!collapsed && (
            <>
              <div className={styles['dropdown-1']}>
                <Dropdown
                  placeholder="Група"
                  onChange={handleSubmit}
                  showRemark={false}
                  name="group"
                  options={
                    groupData
                      ? groupData.groups.map(group => ({
                          label: group.code,
                          value: group.id,
                        }))
                      : []
                  }
                />
              </div>
              <div className={styles['dropdown-2']}>
                <Dropdown
                  placeholder="Фільрувати за"
                  onChange={handleSubmit}
                  showRemark={false}
                  name="sort"
                  options={filterDropDownOptions}
                />
              </div>
              <div>
                <IconButton
                  className={styles['icon']}
                  type="button"
                  onClick={() => {
                    setFieldValue(
                      'order',
                      values.order === 'asc' ? 'desc' : 'asc',
                    );
                    handleSubmit();
                  }}
                  name="order"
                  size={IconButtonSize.LARGE}
                  shape={IconButtonShape.SQUARE}
                  color={IconButtonColor.SECONDARY}
                  icon={
                    values.order !== 'asc' ? (
                      <BarsArrowUpIcon />
                    ) : (
                      <BarsArrowDownIcon />
                    )
                  }
                />
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};