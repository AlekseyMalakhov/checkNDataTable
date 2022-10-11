<template>
    <n-data-table :columns="columns" :data="data" :scroll-x="700" :max-height="300" />
</template>

<script>
export default {
    name: "App",
    components: {},
    setup() {
        const data = [
            {
                key: 1,
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park",
                phone: "+11111111",
            },
            {
                key: 2,
                name: "Jim Green",
                age: 42,
                address: "London No. 1 Lake Park",
                phone: "+22222222",
            },
            {
                key: 3,
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park",
                phone: "+33333333",
            },
            {
                key: 4,
                name: "Jim Red",
                age: 32,
                address: "London No. 2 Lake Park",
                phone: "+44444444",
            },
            {
                key: 5,
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park",
                phone: "+11111111",
            },
            {
                key: 6,
                name: "Jim Green",
                age: 42,
                address: "London No. 1 Lake Park",
                phone: "+22222222",
            },
            {
                key: 7,
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park",
                phone: "+33333333",
            },
            {
                key: 8,
                name: "Jim Red",
                age: 32,
                address: "London No. 2 Lake Park",
                phone: "+44444444",
            },
        ];

        const columns = [
            {
                title: "Name",
                key: "name",
                defaultSortOrder: "ascend",
                sorter: "default",
            },
            {
                title: "Age",
                key: "age",
                defaultSortOrder: "ascend",
                sorter: "default",
            },
            {
                title: "Address",
                key: "address",
                defaultSortOrder: "ascend",
                sorter: "default",
            },
            {
                title: "Phone",
                key: "phone",
            },
        ];

        return {
            data,
            columns,
        };
    },
};
</script>

<style module></style>
