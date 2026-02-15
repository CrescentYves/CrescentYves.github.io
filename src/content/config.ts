import { defineCollection, z } from 'astro:content';

const works = defineCollection({
	type: 'content',
	// Schema 验证：确保 markdown 里的字段类型正确
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(), // 新增：支持更新日期
		heroImage: z.string().optional(),        // 新增：支持封面图
	}),
});

export const collections = { works };