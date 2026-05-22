<template>
    <section>
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 gap-5 rounded-3xl bg-stone-100 shadow-sm mb-6 border border-stone-200">
                <div>
                    <p class="text-xs text-gray-500">Shop our latest curated collection</p>
                    <h4 class="text-3xl font-medium">Ecommerce Shop</h4>
                </div>

                <div class="w-full sm:max-w-md">
                    <input 
                        type="text" placeholder="Search product..."
                        @input="onSearch"
                        class="w-full px-4 py-3 rounded-3xl border border-slate-200 bg-slate-50 text-sm text-slate-900 transition focus:border-primary focu:bg-white">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

// ====== search logic category
const emit = defineEmits(["searchCategories"]);

const onSearch = (even) => {
    emit("searchCategories", even.target.value);
};
</script>