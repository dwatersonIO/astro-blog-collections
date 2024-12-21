declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"astro-netlify-install.mdx": {
	id: "astro-netlify-install.mdx";
  slug: "astro-netlify-install";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"astro-shiki-themes.mdx": {
	id: "astro-shiki-themes.mdx";
  slug: "astro-shiki-themes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"css-flexbox copy.mdx": {
	id: "css-flexbox copy.mdx";
  slug: "css-flexbox-copy";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"css-flexbox.mdx": {
	id: "css-flexbox.mdx";
  slug: "css-flexbox";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-basic-crud.mdx": {
	id: "dj-basic-crud.mdx";
  slug: "dj-basic-crud";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-csv.mdx": {
	id: "dj-csv.mdx";
  slug: "dj-csv";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-forms.mdx": {
	id: "dj-forms.mdx";
  slug: "dj-forms";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-m2m-search.mdx": {
	id: "dj-m2m-search.mdx";
  slug: "dj-m2m-search";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-model.mdx": {
	id: "dj-model.mdx";
  slug: "dj-model";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-new-project.mdx": {
	id: "dj-new-project.mdx";
  slug: "new-django";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"dj-secret-key.mdx": {
	id: "dj-secret-key.mdx";
  slug: "dj-secret-key";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"git-hub-site.mdx": {
	id: "git-hub-site.mdx";
  slug: "git-hub-site";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"git-hub.mdx": {
	id: "git-hub.mdx";
  slug: "git-hub";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"html-new-elements.mdx": {
	id: "html-new-elements.mdx";
  slug: "html-new-elements";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"js-arrray-methods.mdx": {
	id: "js-arrray-methods.mdx";
  slug: "js-arrray-methods";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"js-dom-methods.mdx": {
	id: "js-dom-methods.mdx";
  slug: "js-dom-methods";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"js-dom-summary.mdx": {
	id: "js-dom-summary.mdx";
  slug: "js-dom-summary";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"js-event-listener.mdx": {
	id: "js-event-listener.mdx";
  slug: "js-event-listener";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"linux-cmd-line.mdx": {
	id: "linux-cmd-line.mdx";
  slug: "linux-cmd-line";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"linux-grub-boot.mdx": {
	id: "linux-grub-boot.mdx";
  slug: "grub-boot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"linux-path.mdx": {
	id: "linux-path.mdx";
  slug: "mint-path";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"md-explain.mdx": {
	id: "md-explain.mdx";
  slug: "md-explain";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-boolean.mdx": {
	id: "py-boolean.mdx";
  slug: "py-boolean";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-matplotlib.mdx": {
	id: "py-matplotlib.mdx";
  slug: "py-matplotlib";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-pandas.mdx": {
	id: "py-pandas.mdx";
  slug: "py-pandas";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-pickle.mdx": {
	id: "py-pickle.mdx";
  slug: "py-pickle";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-pip.mdx": {
	id: "py-pip.mdx";
  slug: "py-pip";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-regex.mdx": {
	id: "py-regex.mdx";
  slug: "py-regex";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-tkinter.mdx": {
	id: "py-tkinter.mdx";
  slug: "py-tkinter";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"py-venv.mdx": {
	id: "py-venv.mdx";
  slug: "py-venv";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"react-start-project.mdx": {
	id: "react-start-project.mdx";
  slug: "react-start-project";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"solid-signals-effects.mdx": {
	id: "solid-signals-effects.mdx";
  slug: "solid-signals-effects";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"vue-build-tools-ts.mdx": {
	id: "vue-build-tools-ts.mdx";
  slug: "vue-build-tools-ts";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"vue-opt-computed.mdx": {
	id: "vue-opt-computed.mdx";
  slug: "vue-opt-computed";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"vue-opt-v-bind.mdx": {
	id: "vue-opt-v-bind.mdx";
  slug: "vue-opt-v-bind";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"vue-opt-v-if-else.mdx": {
	id: "vue-opt-v-if-else.mdx";
  slug: "vue-opt-v-if-else";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
"vue-opt-v-model.mdx": {
	id: "vue-opt-v-model.mdx";
  slug: "vue-opt-v-model";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
