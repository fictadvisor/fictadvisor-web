import EmailConfirmationPage from '@/components/templates/email-confirmation-page';

const PasswordResetEmailConfirmationPage = () => (
  <EmailConfirmationPage apiMethodName="forgotPassword" />
);

export default PasswordResetEmailConfirmationPage;
