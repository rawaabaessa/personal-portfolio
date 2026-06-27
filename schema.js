import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().min(1, "الإيميل مطلوب").email("صيغة الإيميل غير صحيحة"),
  message: z.string().min(1, "الرسالة مطلوبة"),
});
