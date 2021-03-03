interface Validation {
  required: Boolean,
  pattern?: {
    value: string | RegExp,
    message: string
  }
}

const emailRules: Validation = {
  required: true,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
};

const defaultRule: Validation = {
  required: true,
};

const validationRules = {
  email: emailRules,
  password: defaultRule,
};

export default validationRules;
