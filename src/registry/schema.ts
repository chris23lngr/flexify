import { z } from 'zod';

export const registryEntrySchema = z.object({
  name: z.string(),
  label: z.string(),
  description: z.string(),
  demo: z.lazy(() => z.any()),
  dependencies: z.array(
    z.object({
      label: z.string(),
      url: z.string().url().optional(),
    })
  ),
});

export type RegistryEntry = z.infer<typeof registryEntrySchema>;

export const registrySchema = z.record(registryEntrySchema);

export type Registry = z.infer<typeof registrySchema>;
