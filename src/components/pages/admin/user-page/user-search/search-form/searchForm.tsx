import UserSearchFormFields, {
    SearchFilter,
    SearchSort
} from "@/components/pages/admin/user-page/user-search/search-form/types";

import Button from '@/components/common/ui/button-mui'
import { useCallback, useMemo, useRef, useState } from 'react';
import { FC } from 'react';
import { useQuery } from 'react-query';
import {
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/react/24/outline';

import {
    Dropdown,
    Input,
    InputSize,
    InputType,
} from '@/components/common/ui/form';
import { Form, Formik, FormikProps, useFormikContext } from 'formik';
import { DropDownOption } from '@/components/common/ui/form/dropdown/types';
import {
    IconButtonColor,
    IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
import GroupAPI from '@/lib/api/group/GroupAPI';
import theme from '@/styles/theme';

import {Box, useMediaQuery} from "@mui/material";
import * as styles from '@/components/pages/admin/user-page/user-search/search-form/searchForm.styles' ;
import stylesScss from '@/components/pages/admin/user-page/user-search/search-form/searchForm.module.scss';
import formatters from "chart.js/dist/core/core.ticks";

export interface SearchFormProps {
    onSubmit: (values: Partial<UserSearchFormFields>) => void;
    initialValues: UserSearchFormFields;
    filterDropDownOptions: DropDownOption[];
    searchPlaceholder: string;
    localStorageName?: string;
}

const FormObserver = (props: { name?: string }) => {
    const { values } = useFormikContext();
    localStorage.setItem(props.name || '', JSON.stringify(values));
    return null;
};

/*
const initialDropdownValues = {
    sort: 'username',
    filter: 'none',
};
*/

const filterOptions: DropDownOption[] = [
    { id: SearchFilter.CONFIRMED, label: 'Верифікований' },
    { id: SearchFilter.UNCONFIRMED, label: 'Не верифікований' },
    { id: SearchFilter.ALL, label: 'Всі' },
];

const sortOptions: DropDownOption[] = [
    { id: SearchSort.EMAIL, label: 'За поштою' },
    { id: SearchSort.USERNAME, label: 'За юзернеймом' },
]

export const UserSearchForm: FC<SearchFormProps> = ({
     onSubmit,
     initialValues,
     searchPlaceholder,
     localStorageName,

}) => {
    const isTablet = useMediaQuery(theme.breakpoints.down('tablet'));
    const [collapsed, setCollapsed] = useState(false);
    const formikRef = useRef<FormikProps<UserSearchFormFields>>(null);

    const handleStateDropdownChange  = useCallback((filter: string) => {
        formikRef.current?.setFieldValue('filter', filter);
        formikRef.current?.handleSubmit();
    }, []);

    const handleSortDropdownChange = useCallback((sort: string) => {
        formikRef.current?.setFieldValue('sort', sort);
        formikRef.current?.handleSubmit();
    }, []);

    const handleOrderChange = useCallback(() => {
        const order = formikRef.current?.values.order;
        formikRef.current?.setFieldValue('order', order === 'asc' ? 'desc' : 'asc');
        formikRef.current?.handleSubmit();
    }, []);

    const handeDownload = useCallback(() => {
        console.log("< called Створити button >")
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize
            innerRef={formikRef}
        >
            {({ handleSubmit, values }) => (
                <Form className={stylesScss['form']}>
                    <FormObserver name={localStorageName} />
                    <Input
                        onDeterredChange={handleSubmit}
                        className={stylesScss['input']}
                        size={InputSize.LARGE}
                        type={InputType.SEARCH}
                        name="search"
                        placeholder={searchPlaceholder}
                        showRemark={false}
                    />
                    <Box sx={styles.collapseBtn}>
                        <IconButton
                            sx={styles.collapseIcon}
                            shape={IconButtonShape.SQUARE}
                            color={IconButtonColor.SECONDARY}
                            icon={collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
                            onClick={() => setCollapsed(pr => !pr)}
                        />
                    </Box>
                    {(!collapsed || (!isTablet && collapsed)) && (
                        <>
                            <>
                            <Box sx={styles.dropdown1}>
                                <Dropdown
                                    label="Стан"
                                    placeholder=""
                                    onChange={handleStateDropdownChange}
                                    showRemark={false}
                                    value={values.filter}
                                    options={filterOptions}
                                />
                            </Box>
                            <Box sx={styles.dropdown2}>
                                <Dropdown
                                    label="Сортування"
                                    placeholder=""
                                    onChange={handleSortDropdownChange}
                                    showRemark={false}
                                    value={values.sort}
                                    options={sortOptions}
                                />
                            </Box>
                            <Box>
                                <IconButton
                                    sx={styles.sortIcon}
                                    onClick={handleOrderChange}
                                    shape={IconButtonShape.SQUARE}
                                    color={IconButtonColor.SECONDARY}
                                    icon={
                                        values.order === 'asc' ? (
                                            <BarsArrowDownIcon />
                                        ) : (
                                            <BarsArrowUpIcon />
                                        )
                                    }
                                />
                            </Box>
                            <Box sx={styles.createButtonContainer}>
                                <Button
                                    sx={styles.createButton}
                                    text="Створити"
                                    onClick={handeDownload}
                                />
                            </Box>
                        </>
                    </>
                    )}
                </Form>
            )}
        </Formik>)
};

export default UserSearchForm;

/*
  text?: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
* */

/*

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
      innerRef={formikRef}
    >
      {({ handleSubmit, values }) => (
        <Form className={stylesScss['form']}>
          <FormObserver name={localStorageName} />
          <Input
            onDeterredChange={handleSubmit}
            className={stylesScss['input']}
            size={InputSize.LARGE}
            type={InputType.SEARCH}
            name="search"
            placeholder={searchPlaceholder}
            showRemark={false}
          />
          <Box sx={styles.collapseBtn}>
            <IconButton
              sx={styles.collapseIcon}
              shape={IconButtonShape.SQUARE}
              color={IconButtonColor.SECONDARY}
              icon={collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
              onClick={() => setCollapsed(pr => !pr)}
            />
          </Box>
          {(!collapsed || (!isTablet && collapsed)) && (
            <>
              <Box sx={styles.dropdown1}>
                <Dropdown
                  placeholder="ІП-22"
                  label="Група"
                  onChange={handleGroupChange}
                  showRemark={false}
                  value={values.group}
                  options={groups}
                />
              </Box>
              <Box sx={styles.dropdown2}>
                <Dropdown
                  label="Сортувати за"
                  placeholder="Іменем"
                  onChange={handleSortChange}
                  showRemark={false}
                  value={values.sort}
                  options={filterDropDownOptions}
                />
              </Box>
              <Box>
                <IconButton
                  sx={styles.sortIcon}
                  onClick={handleOrderChange}
                  shape={IconButtonShape.SQUARE}
                  color={IconButtonColor.SECONDARY}
                  icon={
                    values.order === 'asc' ? (
                      <BarsArrowDownIcon />
                    ) : (
                      <BarsArrowUpIcon />
                    )
                  }
                />
              </Box>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;

* */