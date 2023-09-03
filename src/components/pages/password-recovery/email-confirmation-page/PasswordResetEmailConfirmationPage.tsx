import EmailConfirmationPage from '@/components/pages/email-confirmation-page';

const PasswordResetEmailConfirmationPage = () => {
  return <EmailConfirmationPage apiMethodName="forgotPassword" />;
};

export default PasswordResetEmailConfirmationPage;
