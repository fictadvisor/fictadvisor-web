import { SxProps, Theme } from '@mui/material/styles';


export const dropdown1: SxProps<Theme> = {
    width: '100%',
    maxWidth: '80%',
};
export const dropdown2: SxProps<Theme> = {
    width: '100%',
};

export const collapseBtn: SxProps<Theme> = {
    display: { tablet: 'none' },
    alignSelf: { tablet: 'center' },
};

export const sortIcon: SxProps<Theme> = {
    height: '48px',
    aspectRatio: '1/1',
    display: 'grid',
};

export const collapseIcon: SxProps<Theme> = {
    height: '48px',
    aspectRatio: '1/1',
    alignSelf: { mobile: 'flex-start', tablet: 'center' },
    display: { mobile: 'grid', tablet: 'block !important' },
    '& .svg': { width: { tablet: '70%' } },
};

export const createButtonContainer: SxProps<Theme> = {
    height: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'column',
    alignSelf: 'center',
}

export const createButton: SxProps<Theme> = {
    height: '48px',
    aspectRatio: '1/1',
    flexShrink: 0,
}


