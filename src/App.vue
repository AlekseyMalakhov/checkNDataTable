<template>
    <n-data-table :columns="columns" :data="data" :scroll-x="700" :class="$style.myDataTable" :max-height="500" />
</template>

<script>
import { h } from "vue";

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
                className: "myColumn",
                defaultSortOrder: "ascend",
                sorter: "default",
                render: (row) => {
                    return h(() => row.name + " 123");
                },
            },
            {
                title: "Age",
                key: "age",
                className: "myColumn",
                defaultSortOrder: "ascend",
                sorter: "default",
                render: (row) => {
                    return h(() => row.age + " 123");
                },
            },
            {
                title: "Address",
                key: "address",
                className: "myColumn",
                defaultSortOrder: "ascend",
                sorter: "default",
                render: (row) => {
                    return h(() => row.address + " 123");
                },
            },
            {
                title: "Phone",
                key: "phone",
                className: "myColumn",
            },
        ];

        return {
            data,
            columns,
        };
    },
};
</script>

<style module>
.myDataTable:global.n-data-table .n-data-table-td {
    font-weight: 500;
    font-size: 16px;
    color: #92929d;
    padding-left: 30px;
    word-break: normal;
}
.myDataTable:global.n-data-table .n-data-table-th {
    font-weight: 600;
    font-size: 16px;
    color: #11142d;
    padding-left: 30px;
    word-break: normal;
}
.myDataTable:global.n-data-table .n-data-table-td.myColumn {
    width: 150px;
}
.myDataTable:global.n-data-table .n-data-table-th.myColumn {
    width: 150px;
}
</style>
