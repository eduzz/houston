import { z, ZodIssueCode } from 'zod';

z.setErrorMap((issue, ctx) => {
  console.log({ issue, ctx });
  let message = ctx.defaultError;

  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (ctx.data === undefined || ctx.data === null) {
        message = 'Obrigatório';
        break;
      }

      if (issue.expected === 'number') {
        message = 'Deve ser um número';
        break;
      }

      message = 'Inválido';
      break;
    case ZodIssueCode.invalid_literal:
    case ZodIssueCode.invalid_union:
    case ZodIssueCode.invalid_union_discriminator:
    case ZodIssueCode.invalid_enum_value:
    case ZodIssueCode.unrecognized_keys:
    case ZodIssueCode.invalid_arguments:
    case ZodIssueCode.invalid_return_type:
    case ZodIssueCode.invalid_date:
    case ZodIssueCode.invalid_string:
    case ZodIssueCode.too_small:
    case ZodIssueCode.too_big:
    case ZodIssueCode.invalid_intersection_types:
    case ZodIssueCode.not_multiple_of:
  }
  return { message };
});
// setLocale({
//   mixed: {
//     default: 'Inválido',
//     required: 'Obrigatório',
//     oneOf: 'Deve ser um dos seguintes valores: ${values}',
//     notOneOf: 'Não pode ser um dos seguintes valores: ${values}',
//     notType: ({ type }) => (type === 'number' ? 'Deve ser um número' : 'Inválido')
//   },
//   string: {
//     length: 'Deve ter exatamente ${length} caracteres',
//     min: 'Deve ter pelo menos ${min} caracteres',
//     max: 'Deve ter no máximo ${max} caracteres',
//     email: 'E-mail inválido',
//     url: 'Deve ter um formato de URL válida',
//     trim: 'Não deve conter espaços no início ou no fim.',
//     lowercase: 'Deve estar em maiúsculo',
//     uppercase: 'Deve estar em minúsculo'
//   },
//   number: {
//     min: 'Deve ser no mínimo ${min}',
//     max: 'Deve ser no máximo ${max}',
//     lessThan: 'Deve ser menor que ${less}',
//     moreThan: 'Deve ser maior que ${more}',
//     // notEqual: 'Não pode ser igual à ${notEqual}',
//     positive: 'Deve ser um número positivo',
//     negative: 'Deve ser um número negativo',
//     integer: 'Deve ser um número inteiro'
//   },
//   date: {
//     min: 'Deve ser maior que a data ${min}',
//     max: 'Deve ser menor que a data ${max}'
//   },
//   array: {
//     min: 'Deve ter no mínimo ${min} itens',
//     max: 'Deve ter no máximo ${max} itens'
//   }
// });
