import React, { useState } from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiProvider,
  formatDate,
  Comparators,
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiTableSortingType,
  Criteria,
  EuiHealth,
  EuiIcon,
  EuiLink,
  EuiToolTip,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSwitch,
  EuiSpacer,
  EuiCode,
} from "@elastic/eui";
import { faker } from "@faker-js/faker";

const serverData = {
  took: 5,
  timed_out: false,
  _shards: {
    total: 2,
    successful: 2,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 160,
      relation: "eq",
    },
    max_score: null,
    hits: [
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "bcBk-IwBKj9v7JGHEuxS",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.369Z",
          user: "admin",
          type: "AGENTS_INFO_TYPE",
          ip: "127.0.0.1",
          comment: {
            type: "os",
          },
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352369],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "a8Bk-IwBKj9v7JGHEuwU",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.307Z",
          user: "admin",
          type: "AGENTS_INFO_TYPE",
          ip: "127.0.0.1",
          comment: {
            type: "status",
          },
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352307],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "acBk-IwBKj9v7JGHEezA",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.222Z",
          user: "admin",
          type: "AGENTS_CONFIG_READ",
          ip: "127.0.0.1",
          comment: {
            agent_id: "000",
            component: "request",
            configuration: "remote",
          },
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352222],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "Z8Bk-IwBKj9v7JGHEexV",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.116Z",
          user: "admin",
          type: "AGENTS_LIST",
          ip: "127.0.0.1",
          comment: {},
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352116],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "ZcBk-IwBKj9v7JGHEewc",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.059Z",
          user: "admin",
          type: "AGENTS_LIST",
          ip: "127.0.0.1",
          comment: {},
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352059],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "Y8Bk-IwBKj9v7JGHEOzt",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.012Z",
          user: "admin",
          type: "AGENTS_CONFIG_READ",
          ip: "127.0.0.1",
          comment: {
            agent_id: "000",
            component: "auth",
            configuration: "auth",
          },
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352012],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "YcBk-IwBKj9v7JGHEOzq",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:12.007Z",
          user: "admin",
          type: "AGENTS_LIST",
          ip: "127.0.0.1",
          comment: {},
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974352007],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "X8Bk-IwBKj9v7JGHEOzD",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:11.965Z",
          user: "admin",
          type: "AGENTS_INFO_TYPE",
          ip: "127.0.0.1",
          comment: {
            type: "status",
          },
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974351965],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "XcBk-IwBKj9v7JGHD-zr",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:11.754Z",
          user: "admin",
          type: "AGENTS_INFO_TYPE",
          ip: "127.0.0.1",
          comment: {
            type: "status",
          },
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974351754],
      },
      {
        _index: "sov_uu-audit-test-2024.01.11",
        _id: "XMBk-IwBKj9v7JGHD-zp",
        _score: null,
        _source: {
          timestamp: "2024-01-11T11:59:11.751Z",
          user: "admin",
          type: "SECURITY_CURRENT_POLICIES",
          ip: "127.0.0.1",
          comment: {},
          component: "SOV_WebUI",
          result: true,
        },
        sort: [1704974351751],
      },
    ],
  },
};

// Извлечение данных из hits.hits
const auditData = serverData.hits.hits.map((hit) => hit._source);

// Определение колонок для таблицы
const auditColumns: Array<EuiBasicTableColumn<(typeof auditData)[0]>> = [
  {
    field: "timestamp",
    name: "Timestamp",
    sortable: true,
    truncateText: true,
    render: (timestamp: string) => formatDate(new Date(timestamp), "dobLong"),
  },
  {
    field: "user",
    name: "User",
    truncateText: true,
  },
  {
    field: "type",
    name: "Type",
    truncateText: true,
  },
  {
    field: "ip",
    name: "IP",
    truncateText: true,
  },
  {
    field: "comment.type",
    name: "Comment Type",
    truncateText: true,
  },
  {
    field: "component",
    name: "Component",
    truncateText: true,
  },
  {
    field: "result",
    name: "Result",
    render: (result: boolean) => (
      <EuiHealth color={result ? "success" : "danger"}>
        {result ? "Success" : "Failure"}
      </EuiHealth>
    ),
  },
];

const TestHypothesis = () => {
  const [enableAll, setEnableAll] = useState(false);
  const [readonly, setReadonly] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sortField, setSortField] =
    useState<keyof (typeof auditData)[0]>("timestamp");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const onTableChange = ({ page, sort }: Criteria<(typeof auditData)[0]>) => {
    if (page) {
      const { index: pageIndex, size: pageSize } = page;
      setPageIndex(pageIndex);
      setPageSize(pageSize);
    }
    if (sort) {
      const { field: sortField, direction: sortDirection } = sort;
      setSortField(sortField);
      setSortDirection(sortDirection);
    }
  };

  // Manually handle sorting and pagination of data
  const findAuditData = (
    data: typeof auditData,
    pageIndex: number,
    pageSize: number,
    sortField: keyof (typeof auditData)[0],
    sortDirection: "asc" | "desc"
  ) => {
    let items;
    if (sortField) {
      items = data
        .slice(0)
        .sort(
          Comparators.property(sortField, Comparators.default(sortDirection))
        );
    } else {
      items = data;
    }
    let pageOfItems;
    if (!pageIndex && !pageSize) {
      pageOfItems = items;
    } else {
      const startIndex = pageIndex * pageSize;
      pageOfItems = items.slice(
        startIndex,
        Math.min(startIndex + pageSize, data.length)
      );
    }
    return {
      pageOfItems,
      totalItemCount: data.length,
    };
  };

  const { pageOfItems, totalItemCount } = findAuditData(
    auditData,
    pageIndex,
    pageSize,
    sortField,
    sortDirection
  );

  const pagination = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    totalItemCount: totalItemCount,
    pageSizeOptions: [3, 5, 8],
  };

  const sorting: EuiTableSortingType<(typeof auditData)[0]> = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
    enableAllColumns: enableAll,
    readOnly: readonly,
  };

  return (
    <>
      <EuiFlexGroup style={{ padding: "16px" }}>
        <EuiFlexItem>
          <EuiProvider colorMode="light">
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiSwitch
                  label={<EuiCode>enableAllColumns</EuiCode>}
                  checked={enableAll}
                  onChange={() => setEnableAll((enabled) => !enabled)}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSwitch
                  label={<EuiCode>readOnly</EuiCode>}
                  checked={readonly}
                  onChange={() => setReadonly((readonly) => !readonly)}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiBasicTable
              tableCaption="Audit Log"
              items={pageOfItems}
              columns={auditColumns}
              pagination={pagination}
              sorting={sorting}
              onChange={onTableChange}
            />
          </EuiProvider>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default TestHypothesis;
