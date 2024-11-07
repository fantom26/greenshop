import { NewslettersObject, NewslettersSchema } from "@/utils/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";

import { Form } from "@/shared/ui/form";

import * as S from "./form.styled";

export function EmailForm() {
  const { t } = useTranslation("common");

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
      // eslint-disable-next-line no-console
      console.log(email);
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
          placeholder={t("common:forms.email.placeholder")}
          widthBtn={
            <S.Button variant="solid" isLoading={isSubmitting}>
              {t("btn.join")}
            </S.Button>
          }
        />
      </S.FormWrapper>
    </Form>
  );
}
