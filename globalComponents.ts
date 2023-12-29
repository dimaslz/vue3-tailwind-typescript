import { createApp } from "vue";
import BaseCard from "@/components/base/cards/baseCard/BaseCard.vue";
import BaseButton from "@/components/base/button/baseButton/BaseButton.vue";
import BaseInputLabel from "@/components/base/inputLabel/BaseInputLabel.vue";
import BaseInput from "@/components/base/input/BaseInput.vue";

type AppInstance = ReturnType<typeof createApp>;
/**
 * A function to register all global components
 */
export const loadGlobalComponents = (app: AppInstance): void => {
  app.component("BaseCard", BaseCard);
  app.component("BaseButton", BaseButton);
  app.component("BaseInputLabel", BaseInputLabel);
  app.component("BaseInput", BaseInput);
};
