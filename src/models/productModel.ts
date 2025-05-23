// انواع پایه
type InputType = "Text" | "Textarea" | "Dropdown" | "File" | "CheckBox" | "Radio" | "MultiSelect";
type Currency = "تومان" | "ریال" | "دلار";

// قوانین اعتبارسنجی
interface ValidationRule {
  type: number;
  value: string;
  errorMessage: string | null;
  allowedFileTypes: string[] | null;
  maxFileSize: number;
}

// استایل فیلدها
interface FieldStyle {
  width: string;
  placeholder: string | null;
  suffix: string | null;
}

// گزینه‌های انتخابی
export interface Option {
  display: string;
  value: string;
  priceFactor: number;
  isDefault: boolean;
  isDisabled: boolean;
  icon: string | null;
  color: string | null;
  description: string | null;
  dependentFieldOptions: Record<string, DependentOptionConfig> | null;
  dependentFields: Field[] | null;
}

// تنظیمات وابسته برای گزینه‌ها
interface DependentOptionConfig {
  isVisible: boolean;
  isDisabled: boolean;
  options: Option[];
}

// فیلدهای فرم
export interface Field {
  fieldId: string;
  label: string;
  inputType: InputType;
  required: boolean;
  displayInDescription: boolean;
  defaultValue: boolean | string | number;
  order: number;
  description: string | null;
  enabled: boolean;
  isVisible: boolean;
  dependsOn: string | null;
  priceImpact: string | number | null;
  style: FieldStyle;
  options: Option[] | null;
  validationRules: ValidationRule[] | null;
}

// بخش‌های فرم
interface Section {
  title: string;
  description: string;
  collapsible: boolean;
  fields: Field[];
  order: number;
}

// قوانین قیمت‌گذاری
interface PriceRule {
  [key: string]: unknown;
}

// ساختار اصلی فرم محصول
export interface ProductForm {
  title: string;
  description: string;
  basePrice: number;
  currency: Currency;
  sections: Section[];
  priceRules: PriceRule[];
}
