import EmailConfirmationPage from '@/components/templates/email-confirmation-page';

const RegistrationEmailConfirmationPage = () => (
  <EmailConfirmationPage apiMethodName="verifyEmail" />
);

export default RegistrationEmailConfirmationPage;
