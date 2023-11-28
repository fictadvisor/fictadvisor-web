import React from 'react';

import AdminPanelLayout from '@/components/common/layout/admin-panel-layout/AdminPanelLayout';


import SearchInitialValues from "@/components/pages/admin/user-page/user-search/search-form/constants";

import {DropDownOption} from "@/components/common/ui/form/dropdown/types";
import UserSearchForm from "@/components/pages/admin/user-page/user-search/search-form";
import UserSearchPage from "@/components/pages/admin/user-page/user-search";
const filterOptions: DropDownOption[] = [
    { id: 'firstName', label: 'Іменем' },
    { id: 'lastName', label: 'Прізвищем' },
];


const Index = () => {
  return (
    <AdminPanelLayout>
        <h5> users/edit/index.tsx </h5>
        <UserSearchPage/>

    </AdminPanelLayout>
  );
};

export default Index;
