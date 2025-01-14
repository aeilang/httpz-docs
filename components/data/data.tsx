import { Database, Filter, HandHelping, icons, Star, SwatchBook, Zap } from "lucide-react";

export const featureListEN =  [
  {
    icon: <Zap size={30}/>,
    title: 'net/http 1.22+',
    description: "You're essentially writing with net/http; httpz is just a set of helper functions.",
  },
  {
    icon: <SwatchBook size={30}/>,
    title: 'Convenient grouping',
    description: 'Convenient route grouping, where you can set middleware for each group or for individual routes',
  },
  {
    icon: <Star size={30}/>,
    title: "Centralized error handling",
    description: "Inspired by Echo. Reduce the workload of sending responses when errors occur"
  },
  {
    icon: <Filter size={30}/>,
    title: 'Middleware',
    description: 'Rich and powerful middleware, derived from chi.',
  },
  {
    icon: <Database size={30}/>,
    title: 'Data Binding',
    description: 'Simplify the process of binding HTTP request payloads, including JSON, XML, or form-data. derived from Echo.',
  },
  {
    icon: <HandHelping size={30}/>,
    title: "Helper ResponseWriter",
    description: "It is up to you whether to manually return the response or use httpz's helper functions.",
  },
];


export const featureListCN =[
  {
    icon: <Zap size={30}/>,
    title: 'net/http 1.22+',
    description: "你实际上是在使用 net/http；httpz 只是一些辅助函数。",
  },
  {
    icon: <SwatchBook size={30}/>,
    title: '便捷的分组',
    description: '方便的路由分组，你可以为每个分组或单独的路由设置中间件。',
  },
  {
    icon: <Star size={30} />,
    title: "集中式错误处理",
    description: "灵感来自 Echo。减少在发生错误时发送响应的工作量。",
  },
  {
    icon: <Filter size={30} />,
    title: '中间件',
    description: '丰富而强大的中间件，来自 chi。',
  },
  {
    icon: <Database size={30}/>,
    title: '数据绑定',
    description: '简化绑定 HTTP 请求负载的过程，包括 JSON、XML 或表单数据，来自 Echo。',
  },
  {
    icon: <HandHelping size={30}/>,
    title: "辅助 ResponseWriter",
    description: "由你决定是手动返回响应，还是使用 httpz 的辅助函数。",
  },
]




