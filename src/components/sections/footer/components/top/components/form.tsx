import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Form } from "@components/form";
import { useTranslation } from "@hooks";
import { ButtonVariant } from "@utils/enums/components";
import { NewslettersObject, NewslettersSchema } from "@utils/schemas";

import * as S from "./form.styled";

export const EmailForm = () => {
  const t = useTranslation();

  const methods = useForm<NewslettersSchema>({
    resolver: yupResolver(NewslettersObject)
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = methods;

  const onSubmit = async (data: NewslettersSchema) => {
    try {
      const { email } = data;
      alert(email);
      reset();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <S.FormWrapper>
        <Form.Input
          name="email"
          withLabel={false}
          borderRadius="0.6rem 0 0 0.6rem"
          placeholder={t.forms.email.placeholder}
          widthBtn={
            <S.Button variant={ButtonVariant.solid} isLoading={isSubmitting}>
              {t.btn.join}
            </S.Button>
          }
        />
      </S.FormWrapper>
    </Form>
  );
};
