import { z, ZodIssueCode } from 'zod';

z.setErrorMap((issue, ctx) => {
  let message = ctx.defaultError;

  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (ctx.data === undefined || ctx.data === null) {
        message = 'Deve ser preenchido';
        break;
      }

      if (issue.expected === 'number') {
        message = 'Deve ser um número válido';
        break;
      }

      if (issue.expected === 'date') {
        message = 'Deve ser uma data válida';
        break;
      }

      message = 'Valor Inválido';
      break;

    case ZodIssueCode.invalid_string:
      const invalidStringIssue = issue as z.ZodInvalidStringIssue;

      if (invalidStringIssue.validation === 'email') {
        message = 'Deve ser um e-mail válido';
        break;
      }

      if (invalidStringIssue.validation === 'url') {
        message = 'Deve ser uma URL válida';
        break;
      }

      break;
    case ZodIssueCode.too_small:
      const toSmallIssue = issue as z.ZodTooSmallIssue;
      message = `Deve ${toSmallIssue.type === 'number' ? 'ser' : 'ter'} no mínimo ${toSmallIssue.minimum}${
        toSmallIssue.type === 'string'
          ? ' caracteres'
          : toSmallIssue.type === 'number'
          ? ''
          : toSmallIssue.minimum == 1
          ? ' item'
          : ' itens'
      }`;
      break;
    case ZodIssueCode.too_big:
      message = `Deve ter no máximo ${(issue as z.ZodTooBigIssue).maximum} caracteres`;
      break;
    case ZodIssueCode.invalid_date:
      message = 'Deve ser uma data válida';
      break;
    case ZodIssueCode.invalid_literal:
    case ZodIssueCode.invalid_union:
    case ZodIssueCode.invalid_union_discriminator:
    case ZodIssueCode.invalid_enum_value:
    case ZodIssueCode.unrecognized_keys:
    case ZodIssueCode.invalid_arguments:
    case ZodIssueCode.invalid_return_type:
    case ZodIssueCode.invalid_intersection_types:
    case ZodIssueCode.not_multiple_of:
  }

  return { message };
});
