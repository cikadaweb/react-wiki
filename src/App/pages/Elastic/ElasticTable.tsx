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
  data: {
    took: 4,
    timed_out: false,
    _shards: {
      total: 2,
      successful: 2,
      skipped: 0,
      failed: 0,
    },
    hits: {
      total: {
        value: 14,
        relation: "eq",
      },
      max_score: null,
      hits: [
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "FsD1_IwBKj9v7JGHXvbP",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:23.431Z",
            user: "admin",
            type: "SECURITY_CURRENT_POLICIES",
            ip: "127.0.0.1",
            comment: {},
            component: "SOV_WebUI",
            result: true,
          },
          sort: [1705050983431],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "EcD1_IwBKj9v7JGHLvZb",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:11.027Z",
            user: "admin",
            type: "RULES_FILE_READ",
            ip: "127.0.0.1",
            comment: {
              filename: "0010-rules_config.xml",
            },
            component: "SOV_WebUI",
            result: true,
          },
          sort: [1705050971027],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "D8D1_IwBKj9v7JGHKvYZ",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:09.937Z",
            user: "admin",
            type: "RULES_LIST_FILES_LOCAL",
            ip: "127.0.0.1",
            comment: {},
            component: "SOV_WebUI",
            result: true,
          },
          sort: [1705050969937],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "DMD1_IwBKj9v7JGHH_Ys",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:07.140Z",
            user: "admin",
            type: "AGENTS_ADD",
            ip: "127.0.0.1",
            comment: {
              agent_name: "agents",
            },
            component: "SOV_WebUI",
            result: false,
          },
          sort: [1705050967140],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "CcD1_IwBKj9v7JGHFfaA",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:04.664Z",
            user: "admin",
            type: "AGENTS_CONFIG_READ",
            ip: "127.0.0.1",
            comment: {
              agent_id: "123",
              component: "ciakdacomponent",
              configuration: "cikadaconfig",
            },
            component: "SOV_WebUI",
            result: false,
          },
          sort: [1705050964664],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "B8D1_IwBKj9v7JGHDfaW",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:02.638Z",
            user: "admin",
            type: "AGENTS_INFO_READ",
            ip: "127.0.0.1",
            comment: {
              agent_id: "agents",
            },
            component: "SOV_WebUI",
            result: true,
          },
          sort: [1705050962638],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "BMD1_IwBKj9v7JGHB_by",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:16:01.195Z",
            user: "admin",
            type: "AGENTS_INFO_TYPE",
            ip: "127.0.0.1",
            comment: {
              type: "cikadaType",
            },
            component: "SOV_WebUI",
            result: false,
          },
          sort: [1705050961195],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "AsD1_IwBKj9v7JGHAvau",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:15:59.847Z",
            user: "admin",
            type: "AGENTS_LIST",
            ip: "127.0.0.1",
            comment: {},
            component: "SOV_WebUI",
            result: true,
          },
          sort: [1705050959847],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "_8D0_IwBKj9v7JGH-fWi",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:15:57.531Z",
            user: "admin",
            type: "AGENTS_DELETE",
            ip: "127.0.0.1",
            comment: {
              agent_id: "agents",
            },
            component: "SOV_WebUI",
            result: false,
          },
          sort: [1705050957531],
        },
        {
          _index: "sov_uu-audit-test-2024.01.12",
          _id: "_cD0_IwBKj9v7JGH8vWk",
          _score: null,
          _source: {
            timestamp: "2024-01-12T09:15:55.739Z",
            user: "admin",
            type: "SECURITY_CURRENT_POLICIES",
            ip: "127.0.0.1",
            comment: {},
            component: "SOV_WebUI",
            result: true,
          },
          sort: [1705050955739],
        },
      ],
    },
  },
  status: 200,
  statusText: "OK",
  headers: {
    "cache-control": "private, no-cache, no-store, must-revalidate",
    connection: "keep-alive",
    "content-encoding": "gzip",
    "content-type": "application/json; charset=utf-8",
    date: "Fri, 12 Jan 2024 09:16:31 GMT",
    "keep-alive": "timeout=120",
    "osd-name": "ubuntu-frontman2",
    "transfer-encoding": "chunked",
    vary: "accept-encoding",
    "x-frame-options": "sameorigin",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 20000,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: null,
    },
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "osd-xsrf": "kibana",
      pattern: "sov_uu-alerts-*",
      id: "default",
    },
    method: "post",
    data: '{"index":"sov_uu-audit-test-2024.01.12","body":{"query":{"bool":{"must":[{"range":{"timestamp":{"gte":"now-24h","lte":"now","format":"epoch_millis"}}}],"filter":[{"match_all":{}}],"should":[],"must_not":[]}},"size":10,"from":0,"sort":{"timestamp":{"order":"desc"}}}}',
    url: "/wko/elastic/audit",
  },
  request: {},
};

// Извлечение данных из hits.hits
const auditData = serverData.data.hits.hits.map((hit) => ({
  ...hit._source,
  _id: hit._id,
}));

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
  };

  return (
    <>
      <EuiFlexGroup style={{ padding: "16px" }}>
        <EuiFlexItem>
          <EuiProvider colorMode="light">
            <EuiBasicTable
              tableCaption="Audit Log"
              items={pageOfItems.map((audit) => ({
                ...audit,
                key: audit._id, // Добавляем ключ _id в каждый объект
              }))}
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
