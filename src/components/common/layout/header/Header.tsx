import React, { useState } from 'react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardIcon,
  HomeIcon,
  LockClosedIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import Button, {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';
import useIsMobile from '@/hooks/use-is-mobile/UseIsMobile';

import { BurgerMenu } from '../../custom-svg/BurgerMenu';
import {
  IconButton,
  IconButtonColor,
  IconButtonShape,
  IconButtonSize,
} from '../../ui/icon-button/IconButton';
import { CloseButton } from '../../ui/icon-button/variants';
import { TabItem, TabItemContentPosition } from '../../ui/tab';
import { TabItemContentSize } from '../../ui/tab/tab-item/TabItem';

import { HeaderDesktopCard } from './components/header-desktop-card';
import HeaderDivider from './components/header-divider/HeaderDivider';
import HeaderMobileButton from './components/header-mobile-button/HeaderMobileButton';
import { HeaderMobileCard } from './components/header-mobile-card/HeaderMobileCard';

import styles from './Header.module.scss';

interface HeaderProps {
  name?: string;
  groupName?: string;
  position?: string;
  isLoggined?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  name = 'Ярмоленко Єлизавета Миколаївна',
  groupName = 'ІС-11',
  position = 'Зам. ст',
  isLoggined = false,
}) => {
  const isMobile = useIsMobile(1200);
  const [clicked, setClicked] = useState(false);
  const mobileMenu = (
    <div className={styles['mobile-menu']}>
      <Link href={''}>
        <TabItem
          className=""
          text="Головна"
          position={TabItemContentPosition.LEFT}
          icon={<HomeIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
      <Link href={''}>
        <TabItem
          className=""
          text="Опитування"
          position={TabItemContentPosition.LEFT}
          icon={<ClipboardIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
      <Link href={''}>
        <TabItem
          className=""
          text="Викладачі"
          position={TabItemContentPosition.LEFT}
          icon={<BriefcaseIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
      <Link href={''}>
        <TabItem
          className=""
          text="Предмети"
          position={TabItemContentPosition.LEFT}
          icon={<AcademicCapIcon />}
          size={TabItemContentSize.SMAll}
        />
      </Link>
    </div>
  );
  const mobileDivider = (
    <div style={{ width: '100%' }}>
      <HeaderDivider />
    </div>
  );
  const handleClick = () => {
    setClicked(clicked => !clicked);
  };

  if (isMobile && isLoggined) {
    return clicked ? (
      <div className={styles['wrapper']}>
        <div className={styles['shadow']} onClick={handleClick}></div>
        <div
          className={styles['header-container']}
          style={{ backgroundColor: '#1e1e1e' }}
        >
          <div className={styles['header-logo']}>
            <img src={`/assets/logo.png`} alt="logo" />
          </div>
          <div className={styles['mobile-button']}>
            <CloseButton
              onClick={handleClick}
              size={IconButtonSize.NORMAL}
              color={IconButtonColor.TRANSPARENT}
            />
          </div>
        </div>
        <div className={styles['drop']}>
          <div>
            <HeaderMobileCard
              name={name}
              groupName={groupName}
              position={position}
            />
          </div>
          <div className={styles['account-buttons']}>
            <TabItem
              className=""
              text="Загальне"
              position={TabItemContentPosition.LEFT}
              icon={<AcademicCapIcon />}
              size={TabItemContentSize.SMAll}
            />
            <TabItem
              className=""
              text="Безпека"
              position={TabItemContentPosition.LEFT}
              icon={<LockClosedIcon />}
              size={TabItemContentSize.SMAll}
            />
            <TabItem
              className=""
              text="Група"
              position={TabItemContentPosition.LEFT}
              icon={<UsersIcon />}
              size={TabItemContentSize.SMAll}
            />
          </div>

          {mobileDivider}
          {mobileMenu}
        </div>
      </div>
    ) : (
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <img src={`/assets/logo.png`} alt="logo" />
        </div>
        <div className={styles['mobile-button']}>
          <IconButton
            onClick={handleClick}
            size={IconButtonSize.NORMAL}
            color={IconButtonColor.TRANSPARENT}
            icon={<BurgerMenu />}
          />
        </div>
      </div>
    );
  }

  if (isMobile && !isLoggined) {
    return clicked ? (
      <div className={styles['wrapper']}>
        <div className={styles['shadow']} onClick={handleClick}></div>
        <div
          className={styles['header-container']}
          style={{ backgroundColor: '#1e1e1e' }}
        >
          <div className={styles['header-logo']}>
            <img src={`/assets/logo.png`} alt="logo" />
          </div>
          <div className={styles['mobile-button']}>
            <CloseButton
              onClick={handleClick}
              size={IconButtonSize.NORMAL}
              color={IconButtonColor.TRANSPARENT}
            />
          </div>
        </div>
        <div className={styles['drop']}>
          <div className={styles['login-buttons']}>
            <div style={{ width: '192px' }}>
              <Link href={''}>
                <Button
                  text="Зареєструватись"
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.OUTLINE}
                />
              </Link>
            </div>
            <div style={{ width: '120px' }}>
              <Link href={''}>
                <Button
                  text="Увійти"
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.FILLED}
                />
              </Link>
            </div>
          </div>
          {mobileDivider}
          {mobileMenu}
        </div>
      </div>
    ) : (
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <img src={`/assets/logo.png`} alt="logo" />
        </div>
        <div className={styles['mobile-button']}>
          <IconButton
            onClick={handleClick}
            size={IconButtonSize.NORMAL}
            color={IconButtonColor.TRANSPARENT}
            icon={<BurgerMenu />}
          />
        </div>
      </div>
    );
  }

  return (
    !isMobile && (
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <img src={`/assets/logo.png`} alt="logo" />
        </div>

        <div className={styles['menu']}>
          <Link href={{}}>
            <Button
              text="Головна"
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={{}}>
            <Button
              text="Опитування"
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={{}}>
            <Button
              text="Викладачі"
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          <Link href={{}}>
            <Button
              text="Предмети"
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.TEXT}
            />
          </Link>
          {/* <Link href={{}}>
            <Button
              text="Розклад"
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.TEXT}
            />
          </Link> */}
        </div>
        {isLoggined ? (
          <div style={{ width: '286px', height: '42px' }}>
            <HeaderDesktopCard
              name={name}
              groupName={groupName}
              position={position}
            ></HeaderDesktopCard>
          </div>
        ) : (
          <div className={styles['login-buttons']}>
            <Link href={{}}>
              <Button
                text="Зареєструватись"
                size={ButtonSize.SMALL}
                variant={ButtonVariant.OUTLINE}
              />
            </Link>

            <Link href={{}}>
              {' '}
              <Button
                text="Увійти"
                size={ButtonSize.SMALL}
                variant={ButtonVariant.FILLED}
              />
            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default Header;
