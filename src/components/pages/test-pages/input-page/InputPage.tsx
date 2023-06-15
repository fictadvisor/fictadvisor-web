import { FC } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import Button from '@/components/common/ui/button-mui';
import TextArea from '@/components/common/ui/form/text-area-mui';
import Input from "@/components/common/ui/form/input-mui";
import * as styles from './InputPage.styles';

// const InputPage: FC = () => {
//   return (
//     <Box sx={styles.wrapper}>
//       <Formik
//         initialValues={{ t1: '', t2: '', t3: '', t4: '', t5: '', t6: '' }}
//         validationSchema={yup.object().shape({
//           t5: yup.string().required('Cannot be empty!'),
//         })}
//         onSubmit={data => console.log(data)}
//       >
//         {({ handleSubmit }) => (
//           <Form style={styles.form}>
//             <Input
//               name="t1"
//               label="Medium text area "
//               placeholder="Medium placeholder"
//             />
//             <Input name="t2" placeholder="medium no label placeholder" />
//             <Input
//               name="t3"
//               label="small label no placeholder"
//               size="small"
//             />
//             <Input name="t4" placeholder="small no label" size="small" />
//             <Input
//               name="t5"
//               label="error if empty"
//               placeholder="error placeholder"
//               showRemark={true}
//             />
//             <Input
//               name="t6"
//               label="Disabled text area label"
//               placeholder="Disabled placeholder"
//               disabled
//             />
//             <Button onClick={() => handleSubmit()} text="submit" />
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

const InputPage: FC = () => {
  return (
      <>
          <h1>Hi there!</h1>
          <Formik
              initialValues={{ t1: '', t2: '', t3: '', t4: '', t5: '', t6: '' }}
              validationSchema={yup.object().shape({
                  t5: yup.string().required('Cannot be empty!'),
              })}
              onSubmit={data => console.log(data)}
          >
              <Input name={'t1'}/>
          </Formik>

      </>
  );
};

export default InputPage;
