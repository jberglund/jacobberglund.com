import { persistentMap } from "@nanostores/persistent";

export type SettingsValue = {
  "--hue-primary": string;
  "--hue-angle": string;
  "--gray-multiplier": string;
};

export const overrideCSSProperties = persistentMap<SettingsValue>("settings:", {
  "--hue-primary": "270",
  "--hue-angle": "240",
  "--gray-multiplier": "0.2",
});
