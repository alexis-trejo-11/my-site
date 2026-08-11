import { NoteNode } from './notes.model';

/**
 * Vault tree migrated from Obsidian (01–07 only; 00_System skipped).
 * Display names have numeric prefixes stripped; `order` preserves sort.
 * Replace stub markdown under public/notes/ with your real vault files.
 */
export const NOTE_VAULT: NoteNode[] = [
  {
    "type": "folder",
    "id": "01-fundamentals",
    "name": "Fundamentals",
    "order": 1,
    "children": [
      {
        "type": "folder",
        "id": "01-fundamentals/computer-architecture",
        "name": "Computer Architecture",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "01-fundamentals/computer-architecture/00-moc",
            "name": "MOC",
            "title": "MOC",
            "order": 0,
            "contentSrc": "/notes/01-fundamentals/computer-architecture/00-moc.md"
          },
          {
            "type": "folder",
            "id": "01-fundamentals/computer-architecture/part-00-overview",
            "name": "Overview",
            "order": 0,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-00-overview/computing-overview",
                "name": "Computing Overview",
                "title": "Computing Overview",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-00-overview/computing-overview.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/computer-architecture/part-01-data-representation",
            "name": "Data Representation",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-01-data-representation/bit",
                "name": "Bit",
                "title": "Bit",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-01-data-representation/bit.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-01-data-representation/byte",
                "name": "Byte",
                "title": "Byte",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-01-data-representation/byte.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/computer-architecture/part-02-hardware",
            "name": "Hardware",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-02-hardware/cpu",
                "name": "CPU",
                "title": "CPU",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-02-hardware/cpu.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-02-hardware/electronic-circuits",
                "name": "Electronic Circuits",
                "title": "Electronic Circuits",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-02-hardware/electronic-circuits.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-02-hardware/soc-and-gpu",
                "name": "SoC and GPU",
                "title": "SoC and GPU",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-02-hardware/soc-and-gpu.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/computer-architecture/part-03-boot-and-firmware",
            "name": "Boot and Firmware",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-03-boot-and-firmware/bios",
                "name": "BIOS",
                "title": "BIOS",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-03-boot-and-firmware/bios.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-03-boot-and-firmware/boot-sequence",
                "name": "Boot Sequence",
                "title": "Boot Sequence",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-03-boot-and-firmware/boot-sequence.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-03-boot-and-firmware/uefi",
                "name": "UEFI",
                "title": "UEFI",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-03-boot-and-firmware/uefi.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/computer-architecture/part-05-storage",
            "name": "Storage",
            "order": 5,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/computer-architecture/part-05-storage/memory-storage-filesystems-and-paths",
                "name": "Memory Storage Filesystems and Paths",
                "title": "Memory Storage Filesystems and Paths",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/computer-architecture/part-05-storage/memory-storage-filesystems-and-paths.md"
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "01-fundamentals/networking",
        "name": "Networking",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "01-fundamentals/networking/00-how-the-internet-works",
            "name": "How the Internet Works",
            "title": "How the Internet Works",
            "order": 0,
            "contentSrc": "/notes/01-fundamentals/networking/00-how-the-internet-works.md"
          },
          {
            "type": "note",
            "id": "01-fundamentals/networking/00-networking-moc",
            "name": "Networking MOC",
            "title": "Networking MOC",
            "order": 0,
            "contentSrc": "/notes/01-fundamentals/networking/00-networking-moc.md"
          },
          {
            "type": "note",
            "id": "01-fundamentals/networking/01-osi-model",
            "name": "OSI Model",
            "title": "OSI Model",
            "order": 1,
            "contentSrc": "/notes/01-fundamentals/networking/01-osi-model.md"
          },
          {
            "type": "folder",
            "id": "01-fundamentals/networking/protocols",
            "name": "Protocols",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/00-protocols-moc",
                "name": "Protocols MOC",
                "title": "Protocols MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/00-protocols-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/dns",
                "name": "DNS",
                "title": "DNS",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/dns.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/grpc",
                "name": "GRPC",
                "title": "GRPC",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/grpc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/http",
                "name": "HTTP",
                "title": "HTTP",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/http.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/https",
                "name": "HTTPS",
                "title": "HTTPS",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/https.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/ip",
                "name": "IP",
                "title": "IP",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/ip.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/ip-addresses-and-protocols",
                "name": "IP Addresses and Protocols",
                "title": "IP Addresses and Protocols",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/ip-addresses-and-protocols.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/nat",
                "name": "NAT",
                "title": "NAT",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/nat.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/tcp",
                "name": "TCP",
                "title": "TCP",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/tcp.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/tls",
                "name": "TLS",
                "title": "TLS",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/tls.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/udp",
                "name": "UDP",
                "title": "UDP",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/udp.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/networking/protocols/web-rtc",
                "name": "WEB RTC",
                "title": "WEB RTC",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/networking/protocols/web-rtc.md"
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "01-fundamentals/operating-systems",
        "name": "Operating Systems",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "01-fundamentals/operating-systems/kernel",
            "name": "Kernel",
            "title": "Kernel",
            "order": 10000,
            "contentSrc": "/notes/01-fundamentals/operating-systems/kernel.md"
          },
          {
            "type": "folder",
            "id": "01-fundamentals/operating-systems/linux",
            "name": "Linux",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/operating-systems/linux/00-home",
                "name": "Home",
                "title": "Home",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/operating-systems/linux/00-home.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/operating-systems/linux/01-process-management",
                "name": "Process Management",
                "title": "Process Management",
                "order": 1,
                "contentSrc": "/notes/01-fundamentals/operating-systems/linux/01-process-management.md"
              }
            ]
          },
          {
            "type": "note",
            "id": "01-fundamentals/operating-systems/macos",
            "name": "macOS",
            "title": "macOS",
            "order": 10000,
            "contentSrc": "/notes/01-fundamentals/operating-systems/macos.md"
          },
          {
            "type": "note",
            "id": "01-fundamentals/operating-systems/operating-system-overview",
            "name": "Operating System Overview",
            "title": "Operating System Overview",
            "order": 10000,
            "contentSrc": "/notes/01-fundamentals/operating-systems/operating-system-overview.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "01-fundamentals/software-engineer",
        "name": "Software Engineer",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "01-fundamentals/software-engineer/00-software-engineer-moc",
            "name": "Software Engineer MOC",
            "title": "Software Engineer MOC",
            "order": 0,
            "contentSrc": "/notes/01-fundamentals/software-engineer/00-software-engineer-moc.md"
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design",
            "name": "Data Modeling and Schema Design",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/01-data-modeling-and-schema-design/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design/denormalization",
                "name": "Denormalization",
                "title": "Denormalization",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/01-data-modeling-and-schema-design/denormalization.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design/materialized-views",
                "name": "Materialized Views",
                "title": "Materialized Views",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/01-data-modeling-and-schema-design/materialized-views.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design/normalization",
                "name": "Normalization",
                "title": "Normalization",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/01-data-modeling-and-schema-design/normalization.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design/schema-evolution",
                "name": "Schema Evolution",
                "title": "Schema Evolution",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/01-data-modeling-and-schema-design/schema-evolution.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/01-data-modeling-and-schema-design/schema-registry",
                "name": "Schema Registry",
                "title": "Schema Registry",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/01-data-modeling-and-schema-design/schema-registry.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization",
            "name": "Indexing and Query Optimization",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/b-tree",
                "name": "B Tree",
                "title": "B Tree",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/b-tree.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/bloom-filter",
                "name": "Bloom Filter",
                "title": "Bloom Filter",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/bloom-filter.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/composite-index",
                "name": "Composite Index",
                "title": "Composite Index",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/composite-index.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/cost-based-optimizer",
                "name": "Cost Based Optimizer",
                "title": "Cost Based Optimizer",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/cost-based-optimizer.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/covering-index",
                "name": "Covering Index",
                "title": "Covering Index",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/covering-index.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/indexing",
                "name": "Indexing",
                "title": "Indexing",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/indexing.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/lsm-tree",
                "name": "LSM Tree",
                "title": "LSM Tree",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/lsm-tree.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/query-planner",
                "name": "Query Planner",
                "title": "Query Planner",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/query-planner.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/02-indexing-and-query-optimization/secondary-indexes",
                "name": "Secondary Indexes",
                "title": "Secondary Indexes",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/02-indexing-and-query-optimization/secondary-indexes.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution",
            "name": "Partitioning Sharding and Data Distribution",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/clustering",
                "name": "Clustering",
                "title": "Clustering",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/clustering.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/consistent-hashing",
                "name": "Consistent Hashing",
                "title": "Consistent Hashing",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/consistent-hashing.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/data-locality",
                "name": "Data Locality",
                "title": "Data Locality",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/data-locality.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/data-skew",
                "name": "Data Skew",
                "title": "Data Skew",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/data-skew.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/hash-partitioning",
                "name": "Hash Partitioning",
                "title": "Hash Partitioning",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/hash-partitioning.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/hot-partition",
                "name": "Hot Partition",
                "title": "Hot Partition",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/hot-partition.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/range-partitioning",
                "name": "Range Partitioning",
                "title": "Range Partitioning",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/range-partitioning.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/rebalancing",
                "name": "Rebalancing",
                "title": "Rebalancing",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/rebalancing.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/resharding",
                "name": "Resharding",
                "title": "Resharding",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/resharding.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/time-series-partitioning",
                "name": "Time Series Partitioning",
                "title": "Time Series Partitioning",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/03-partitioning-sharding-and-data-distribution/time-series-partitioning.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution",
            "name": "Replication and Data Distribution",
            "order": 4,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/federation",
                "name": "Federation",
                "title": "Federation",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/federation.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/geo-replication",
                "name": "Geo Replication",
                "title": "Geo Replication",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/geo-replication.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/leader-follower-replication",
                "name": "Leader Follower Replication",
                "title": "Leader Follower Replication",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/leader-follower-replication.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/logical-replication",
                "name": "Logical Replication",
                "title": "Logical Replication",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/logical-replication.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/multi-leader-replication",
                "name": "Multi Leader Replication",
                "title": "Multi Leader Replication",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/multi-leader-replication.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/physical-replication",
                "name": "Physical Replication",
                "title": "Physical Replication",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/physical-replication.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/04-replication-and-data-distribution/read-replicas",
                "name": "Read Replicas",
                "title": "Read Replicas",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/04-replication-and-data-distribution/read-replicas.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals",
            "name": "Distributed Systems Fundamentals",
            "order": 5,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/05-distributed-systems-fundamentals/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals/base",
                "name": "BASE",
                "title": "BASE",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/05-distributed-systems-fundamentals/base.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals/cap-theorem",
                "name": "CAP Theorem",
                "title": "CAP Theorem",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/05-distributed-systems-fundamentals/cap-theorem.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals/consensus",
                "name": "Consensus",
                "title": "Consensus",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/05-distributed-systems-fundamentals/consensus.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals/quorum",
                "name": "Quorum",
                "title": "Quorum",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/05-distributed-systems-fundamentals/quorum.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/05-distributed-systems-fundamentals/split-brain",
                "name": "Split Brain",
                "title": "Split Brain",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/05-distributed-systems-fundamentals/split-brain.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/06-consistency-models",
            "name": "Consistency Models",
            "order": 6,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/06-consistency-models/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/06-consistency-models/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/06-consistency-models/acid",
                "name": "ACID",
                "title": "ACID",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/06-consistency-models/acid.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/06-consistency-models/eventual-consistency",
                "name": "Eventual Consistency",
                "title": "Eventual Consistency",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/06-consistency-models/eventual-consistency.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/06-consistency-models/mvcc",
                "name": "MVCC",
                "title": "MVCC",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/06-consistency-models/mvcc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/06-consistency-models/snapshot-isolation",
                "name": "Snapshot Isolation",
                "title": "Snapshot Isolation",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/06-consistency-models/snapshot-isolation.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/06-consistency-models/strong-consistency",
                "name": "Strong Consistency",
                "title": "Strong Consistency",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/06-consistency-models/strong-consistency.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/07-distributed-transactions",
            "name": "Distributed Transactions",
            "order": 7,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/07-distributed-transactions/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/07-distributed-transactions/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/07-distributed-transactions/three-phase-commit",
                "name": "Three Phase Commit",
                "title": "Three Phase Commit",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/07-distributed-transactions/three-phase-commit.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/07-distributed-transactions/two-phase-commit",
                "name": "Two Phase Commit",
                "title": "Two Phase Commit",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/07-distributed-transactions/two-phase-commit.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/08-concurrency-control-and-locking",
            "name": "Concurrency Control and Locking",
            "order": 8,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/08-concurrency-control-and-locking/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/08-concurrency-control-and-locking/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/08-concurrency-control-and-locking/deadlock",
                "name": "Deadlock",
                "title": "Deadlock",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/08-concurrency-control-and-locking/deadlock.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/08-concurrency-control-and-locking/lock-escalation",
                "name": "Lock Escalation",
                "title": "Lock Escalation",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/08-concurrency-control-and-locking/lock-escalation.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/08-concurrency-control-and-locking/optimistic-locking",
                "name": "Optimistic Locking",
                "title": "Optimistic Locking",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/08-concurrency-control-and-locking/optimistic-locking.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/08-concurrency-control-and-locking/pessimistic-locking",
                "name": "Pessimistic Locking",
                "title": "Pessimistic Locking",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/08-concurrency-control-and-locking/pessimistic-locking.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/09-transaction-anomalies",
            "name": "Transaction Anomalies",
            "order": 9,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/09-transaction-anomalies/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/09-transaction-anomalies/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/09-transaction-anomalies/dirty-read",
                "name": "Dirty Read",
                "title": "Dirty Read",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/09-transaction-anomalies/dirty-read.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/09-transaction-anomalies/phantom-read",
                "name": "Phantom Read",
                "title": "Phantom Read",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/09-transaction-anomalies/phantom-read.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/09-transaction-anomalies/read-skew",
                "name": "Read Skew",
                "title": "Read Skew",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/09-transaction-anomalies/read-skew.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/09-transaction-anomalies/write-skew",
                "name": "Write Skew",
                "title": "Write Skew",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/09-transaction-anomalies/write-skew.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/10-storage-engine-internals",
            "name": "Storage Engine Internals",
            "order": 10,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/10-storage-engine-internals/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/10-storage-engine-internals/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/10-storage-engine-internals/checkpointing",
                "name": "Checkpointing",
                "title": "Checkpointing",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/10-storage-engine-internals/checkpointing.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/10-storage-engine-internals/columnar-storage",
                "name": "Columnar Storage",
                "title": "Columnar Storage",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/10-storage-engine-internals/columnar-storage.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/10-storage-engine-internals/compaction",
                "name": "Compaction",
                "title": "Compaction",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/10-storage-engine-internals/compaction.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/10-storage-engine-internals/row-based-storage",
                "name": "Row Based Storage",
                "title": "Row Based Storage",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/10-storage-engine-internals/row-based-storage.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/10-storage-engine-internals/write-ahead-logging",
                "name": "Write Ahead Logging",
                "title": "Write Ahead Logging",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/10-storage-engine-internals/write-ahead-logging.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/11-scalability-and-performance",
            "name": "Scalability and Performance",
            "order": 11,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/backpressure",
                "name": "Backpressure",
                "title": "Backpressure",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/backpressure.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/caching",
                "name": "Caching",
                "title": "Caching",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/caching.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/connection-pooling",
                "name": "Connection Pooling",
                "title": "Connection Pooling",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/connection-pooling.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/horizontal-scaling",
                "name": "Horizontal Scaling",
                "title": "Horizontal Scaling",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/horizontal-scaling.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/load-balancing",
                "name": "Load Balancing",
                "title": "Load Balancing",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/load-balancing.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/11-scalability-and-performance/vertical-scaling",
                "name": "Vertical Scaling",
                "title": "Vertical Scaling",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/11-scalability-and-performance/vertical-scaling.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability",
            "name": "Resilience Reliability and Availability",
            "order": 12,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/12-resilience-reliability-and-availability/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability/circuit-breaker",
                "name": "Circuit Breaker",
                "title": "Circuit Breaker",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/12-resilience-reliability-and-availability/circuit-breaker.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability/failover",
                "name": "Failover",
                "title": "Failover",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/12-resilience-reliability-and-availability/failover.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability/high-availability",
                "name": "High Availability",
                "title": "High Availability",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/12-resilience-reliability-and-availability/high-availability.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability/rate-limiting",
                "name": "Rate Limiting",
                "title": "Rate Limiting",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/12-resilience-reliability-and-availability/rate-limiting.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/12-resilience-reliability-and-availability/throttling",
                "name": "Throttling",
                "title": "Throttling",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/12-resilience-reliability-and-availability/throttling.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/13-data-integration-and-change-propagation",
            "name": "Data Integration and Change Propagation",
            "order": 13,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/13-data-integration-and-change-propagation/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/13-data-integration-and-change-propagation/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/13-data-integration-and-change-propagation/change-data-capture",
                "name": "Change Data Capture",
                "title": "Change Data Capture",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/13-data-integration-and-change-propagation/change-data-capture.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/13-data-integration-and-change-propagation/data-migration",
                "name": "Data Migration",
                "title": "Data Migration",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/13-data-integration-and-change-propagation/data-migration.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/13-data-integration-and-change-propagation/exactly-once-semantics",
                "name": "Exactly Once Semantics",
                "title": "Exactly Once Semantics",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/13-data-integration-and-change-propagation/exactly-once-semantics.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/13-data-integration-and-change-propagation/idempotency",
                "name": "Idempotency",
                "title": "Idempotency",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/13-data-integration-and-change-propagation/idempotency.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "01-fundamentals/software-engineer/14-analytics-and-data-platforms",
            "name": "Analytics and Data Platforms",
            "order": 14,
            "children": [
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/14-analytics-and-data-platforms/00-moc",
                "name": "MOC",
                "title": "MOC",
                "order": 0,
                "contentSrc": "/notes/01-fundamentals/software-engineer/14-analytics-and-data-platforms/00-moc.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/14-analytics-and-data-platforms/data-lake",
                "name": "Data Lake",
                "title": "Data Lake",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/14-analytics-and-data-platforms/data-lake.md"
              },
              {
                "type": "note",
                "id": "01-fundamentals/software-engineer/14-analytics-and-data-platforms/data-warehouse",
                "name": "Data Warehouse",
                "title": "Data Warehouse",
                "order": 10000,
                "contentSrc": "/notes/01-fundamentals/software-engineer/14-analytics-and-data-platforms/data-warehouse.md"
              }
            ]
          },
          {
            "type": "note",
            "id": "01-fundamentals/software-engineer/concept",
            "name": "CONCEPT",
            "title": "CONCEPT",
            "order": 10000,
            "contentSrc": "/notes/01-fundamentals/software-engineer/concept.md"
          }
        ]
      }
    ]
  },
  {
    "type": "folder",
    "id": "02-languages",
    "name": "Languages",
    "order": 2,
    "children": [
      {
        "type": "folder",
        "id": "02-languages/csharp",
        "name": "CSharp",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "02-languages/csharp/00-csharp-moc",
            "name": "CSharp MOC",
            "title": "CSharp MOC",
            "order": 0,
            "contentSrc": "/notes/02-languages/csharp/00-csharp-moc.md"
          },
          {
            "type": "folder",
            "id": "02-languages/csharp/01-language-fundamentals",
            "name": "Language Fundamentals",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "02-languages/csharp/01-language-fundamentals/01-types-and-variables",
                "name": "Types and Variables",
                "title": "Types and Variables",
                "order": 1,
                "contentSrc": "/notes/02-languages/csharp/01-language-fundamentals/01-types-and-variables.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/01-language-fundamentals/02-control-flow-and-loops",
                "name": "Control Flow and Loops",
                "title": "Control Flow and Loops",
                "order": 2,
                "contentSrc": "/notes/02-languages/csharp/01-language-fundamentals/02-control-flow-and-loops.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/01-language-fundamentals/03-methods-and-parameters",
                "name": "Methods and Parameters",
                "title": "Methods and Parameters",
                "order": 3,
                "contentSrc": "/notes/02-languages/csharp/01-language-fundamentals/03-methods-and-parameters.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/01-language-fundamentals/04-nullability-and-types",
                "name": "Nullability and Types",
                "title": "Nullability and Types",
                "order": 4,
                "contentSrc": "/notes/02-languages/csharp/01-language-fundamentals/04-nullability-and-types.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/csharp/02-oop-and-classes",
            "name": "OOP and Classes",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "02-languages/csharp/02-oop-and-classes/01-classes-and-objects",
                "name": "Classes and Objects",
                "title": "Classes and Objects",
                "order": 1,
                "contentSrc": "/notes/02-languages/csharp/02-oop-and-classes/01-classes-and-objects.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/02-oop-and-classes/02-properties-and-encapsulation",
                "name": "Properties and Encapsulation",
                "title": "Properties and Encapsulation",
                "order": 2,
                "contentSrc": "/notes/02-languages/csharp/02-oop-and-classes/02-properties-and-encapsulation.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/02-oop-and-classes/03-inheritance-and-polymorphism",
                "name": "Inheritance and Polymorphism",
                "title": "Inheritance and Polymorphism",
                "order": 3,
                "contentSrc": "/notes/02-languages/csharp/02-oop-and-classes/03-inheritance-and-polymorphism.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/02-oop-and-classes/04-interfaces-and-abstract-classes",
                "name": "Interfaces and Abstract Classes",
                "title": "Interfaces and Abstract Classes",
                "order": 4,
                "contentSrc": "/notes/02-languages/csharp/02-oop-and-classes/04-interfaces-and-abstract-classes.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/csharp/03-collections-and-linq",
            "name": "Collections and LINQ",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "02-languages/csharp/03-collections-and-linq/01-arrays-and-lists",
                "name": "Arrays and Lists",
                "title": "Arrays and Lists",
                "order": 1,
                "contentSrc": "/notes/02-languages/csharp/03-collections-and-linq/01-arrays-and-lists.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/03-collections-and-linq/02-dictionaries-and-sets",
                "name": "Dictionaries and Sets",
                "title": "Dictionaries and Sets",
                "order": 2,
                "contentSrc": "/notes/02-languages/csharp/03-collections-and-linq/02-dictionaries-and-sets.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/03-collections-and-linq/03-linq-basics",
                "name": "LINQ Basics",
                "title": "LINQ Basics",
                "order": 3,
                "contentSrc": "/notes/02-languages/csharp/03-collections-and-linq/03-linq-basics.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/csharp/04-ecosystem-basics",
            "name": "Ecosystem Basics",
            "order": 4,
            "children": [
              {
                "type": "note",
                "id": "02-languages/csharp/04-ecosystem-basics/01-exception-handling",
                "name": "Exception Handling",
                "title": "Exception Handling",
                "order": 1,
                "contentSrc": "/notes/02-languages/csharp/04-ecosystem-basics/01-exception-handling.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/04-ecosystem-basics/02-namespaces-and-projects",
                "name": "Namespaces and Projects",
                "title": "Namespaces and Projects",
                "order": 2,
                "contentSrc": "/notes/02-languages/csharp/04-ecosystem-basics/02-namespaces-and-projects.md"
              },
              {
                "type": "note",
                "id": "02-languages/csharp/04-ecosystem-basics/03-dotnet-cli-essentials",
                "name": "DotNet CLI Essentials",
                "title": "DotNet CLI Essentials",
                "order": 3,
                "contentSrc": "/notes/02-languages/csharp/04-ecosystem-basics/03-dotnet-cli-essentials.md"
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "02-languages/go",
        "name": "Go",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "02-languages/go/00-go-moc",
            "name": "Go MOC",
            "title": "Go MOC",
            "order": 0,
            "contentSrc": "/notes/02-languages/go/00-go-moc.md"
          },
          {
            "type": "folder",
            "id": "02-languages/go/01-language-specification",
            "name": "Language Specification",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "02-languages/go/01-language-specification/01-pointers-and-memory",
                "name": "Pointers and Memory",
                "title": "Pointers and Memory",
                "order": 1,
                "contentSrc": "/notes/02-languages/go/01-language-specification/01-pointers-and-memory.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/01-language-specification/02-structs-and-composition",
                "name": "Structs and Composition",
                "title": "Structs and Composition",
                "order": 2,
                "contentSrc": "/notes/02-languages/go/01-language-specification/02-structs-and-composition.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/01-language-specification/03-slices-and-arrays-internals",
                "name": "Slices and Arrays Internals",
                "title": "Slices and Arrays Internals",
                "order": 3,
                "contentSrc": "/notes/02-languages/go/01-language-specification/03-slices-and-arrays-internals.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/01-language-specification/04-implicit-interfaces",
                "name": "Implicit Interfaces",
                "title": "Implicit Interfaces",
                "order": 4,
                "contentSrc": "/notes/02-languages/go/01-language-specification/04-implicit-interfaces.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/go/02-concurrency-primitives",
            "name": "Concurrency Primitives",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "02-languages/go/02-concurrency-primitives/01-goroutines-vs-threads",
                "name": "Goroutines vs Threads",
                "title": "Goroutines vs Threads",
                "order": 1,
                "contentSrc": "/notes/02-languages/go/02-concurrency-primitives/01-goroutines-vs-threads.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/02-concurrency-primitives/02-channels-and-buffering",
                "name": "Channels and Buffering",
                "title": "Channels and Buffering",
                "order": 2,
                "contentSrc": "/notes/02-languages/go/02-concurrency-primitives/02-channels-and-buffering.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/02-concurrency-primitives/03-the-select-statement",
                "name": "The Select Statement",
                "title": "The Select Statement",
                "order": 3,
                "contentSrc": "/notes/02-languages/go/02-concurrency-primitives/03-the-select-statement.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/02-concurrency-primitives/04-sync-package-and-mutex",
                "name": "Sync Package and Mutex",
                "title": "Sync Package and Mutex",
                "order": 4,
                "contentSrc": "/notes/02-languages/go/02-concurrency-primitives/04-sync-package-and-mutex.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/go/03-runtime-and-internals",
            "name": "Runtime and Internals",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "02-languages/go/03-runtime-and-internals/01-the-go-scheduler-gmp",
                "name": "The Go Scheduler GMP",
                "title": "The Go Scheduler GMP",
                "order": 1,
                "contentSrc": "/notes/02-languages/go/03-runtime-and-internals/01-the-go-scheduler-gmp.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/03-runtime-and-internals/02-memory-alloc-escape-analysis",
                "name": "Memory Alloc Escape Analysis",
                "title": "Memory Alloc Escape Analysis",
                "order": 2,
                "contentSrc": "/notes/02-languages/go/03-runtime-and-internals/02-memory-alloc-escape-analysis.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/03-runtime-and-internals/03-garbage-collector-tuning",
                "name": "Garbage Collector Tuning",
                "title": "Garbage Collector Tuning",
                "order": 3,
                "contentSrc": "/notes/02-languages/go/03-runtime-and-internals/03-garbage-collector-tuning.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/go/04-ecosystem-and-gin",
            "name": "Ecosystem and Gin",
            "order": 4,
            "children": [
              {
                "type": "note",
                "id": "02-languages/go/04-ecosystem-and-gin/01-error-handling-idiomatic",
                "name": "Error Handling Idiomatic",
                "title": "Error Handling Idiomatic",
                "order": 1,
                "contentSrc": "/notes/02-languages/go/04-ecosystem-and-gin/01-error-handling-idiomatic.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/04-ecosystem-and-gin/02-go-modules-and-tooling",
                "name": "Go Modules and Tooling",
                "title": "Go Modules and Tooling",
                "order": 2,
                "contentSrc": "/notes/02-languages/go/04-ecosystem-and-gin/02-go-modules-and-tooling.md"
              },
              {
                "type": "note",
                "id": "02-languages/go/04-ecosystem-and-gin/03-gin-framework-architecture",
                "name": "Gin Framework Architecture",
                "title": "Gin Framework Architecture",
                "order": 3,
                "contentSrc": "/notes/02-languages/go/04-ecosystem-and-gin/03-gin-framework-architecture.md"
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "02-languages/java",
        "name": "Java",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "02-languages/java/00-java-moc",
            "name": "Java MOC",
            "title": "Java MOC",
            "order": 0,
            "contentSrc": "/notes/02-languages/java/00-java-moc.md"
          },
          {
            "type": "folder",
            "id": "02-languages/java/00-overview",
            "name": "Overview",
            "order": 0,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/00-overview/java-best-practices",
                "name": "Java Best Practices",
                "title": "Java Best Practices",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/00-overview/java-best-practices.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/00-overview/java-jvm-internals",
                "name": "Java JVM Internals",
                "title": "Java JVM Internals",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/00-overview/java-jvm-internals.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/00-overview/java-overview",
                "name": "Java Overview",
                "title": "Java Overview",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/00-overview/java-overview.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/00-overview/java-practical-examples",
                "name": "Java Practical Examples",
                "title": "Java Practical Examples",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/00-overview/java-practical-examples.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/01-fundamentals",
            "name": "Fundamentals",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/arrays",
                "name": "Arrays",
                "title": "Arrays",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/arrays.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/basic-io",
                "name": "Basic IO",
                "title": "Basic IO",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/basic-io.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/control-structures",
                "name": "Control Structures",
                "title": "Control Structures",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/control-structures.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/data-types",
                "name": "Data Types",
                "title": "Data Types",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/data-types.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/operators",
                "name": "Operators",
                "title": "Operators",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/operators.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/strings-stringbuilder",
                "name": "Strings StringBuilder",
                "title": "Strings StringBuilder",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/strings-stringbuilder.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/01-fundamentals/variables-constants",
                "name": "Variables Constants",
                "title": "Variables Constants",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/01-fundamentals/variables-constants.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/02-oop",
            "name": "OOP",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/02-oop/abstract-interfaces",
                "name": "Abstract Interfaces",
                "title": "Abstract Interfaces",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/abstract-interfaces.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/classes-objects",
                "name": "Classes Objects",
                "title": "Classes Objects",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/classes-objects.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/constructors",
                "name": "Constructors",
                "title": "Constructors",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/constructors.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/encapsulation",
                "name": "Encapsulation",
                "title": "Encapsulation",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/encapsulation.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/inheritance",
                "name": "Inheritance",
                "title": "Inheritance",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/inheritance.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/inner-classes",
                "name": "Inner Classes",
                "title": "Inner Classes",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/inner-classes.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/polymorphism",
                "name": "Polymorphism",
                "title": "Polymorphism",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/polymorphism.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/02-oop/records-java-14",
                "name": "Records Java 14+",
                "title": "Records Java 14+",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/02-oop/records-java-14.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/03-collections-generics",
            "name": "Collections Generics",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/collections-framework",
                "name": "Collections Framework",
                "title": "Collections Framework",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/collections-framework.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/comparable-comparator",
                "name": "Comparable Comparator",
                "title": "Comparable Comparator",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/comparable-comparator.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/generics",
                "name": "Generics",
                "title": "Generics",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/generics.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/list-arraylist-linkedlist",
                "name": "List ArrayList LinkedList",
                "title": "List ArrayList LinkedList",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/list-arraylist-linkedlist.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/map-hashmap-treemap",
                "name": "Map HashMap TreeMap",
                "title": "Map HashMap TreeMap",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/map-hashmap-treemap.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/queue-deque",
                "name": "Queue Deque",
                "title": "Queue Deque",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/queue-deque.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/set-hashset-treeset",
                "name": "Set HashSet TreeSet",
                "title": "Set HashSet TreeSet",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/set-hashset-treeset.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/03-collections-generics/streams-api",
                "name": "Streams API",
                "title": "Streams API",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/03-collections-generics/streams-api.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/04-core-libraries",
            "name": "Core Libraries",
            "order": 4,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-io",
                "name": "java io",
                "title": "java io",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-io.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-lang-math",
                "name": "java lang Math",
                "title": "java lang Math",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-lang-math.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-lang-string",
                "name": "java lang String",
                "title": "java lang String",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-lang-string.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-lang-system",
                "name": "java lang System",
                "title": "java lang System",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-lang-system.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-nio",
                "name": "java nio",
                "title": "java nio",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-nio.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-util-date-time",
                "name": "java util Date Time",
                "title": "java util Date Time",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-util-date-time.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-util-logging",
                "name": "java util logging",
                "title": "java util logging",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-util-logging.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-util-optional",
                "name": "java util Optional",
                "title": "java util Optional",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-util-optional.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/04-core-libraries/java-util-regex",
                "name": "java util regex",
                "title": "java util regex",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/04-core-libraries/java-util-regex.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/05-error-handling",
            "name": "Error Handling",
            "order": 5,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/05-error-handling/checked-vs-unchecked",
                "name": "Checked vs Unchecked",
                "title": "Checked vs Unchecked",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/05-error-handling/checked-vs-unchecked.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/05-error-handling/custom-exceptions",
                "name": "Custom Exceptions",
                "title": "Custom Exceptions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/05-error-handling/custom-exceptions.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/05-error-handling/exceptions",
                "name": "Exceptions",
                "title": "Exceptions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/05-error-handling/exceptions.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/05-error-handling/try-catch-finally",
                "name": "Try Catch Finally",
                "title": "Try Catch Finally",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/05-error-handling/try-catch-finally.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/05-error-handling/try-with-resources",
                "name": "Try with Resources",
                "title": "Try with Resources",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/05-error-handling/try-with-resources.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/06-concurrency",
            "name": "Concurrency",
            "order": 6,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/06-concurrency/atomic-classes",
                "name": "Atomic Classes",
                "title": "Atomic Classes",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/06-concurrency/atomic-classes.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/06-concurrency/basic-threads",
                "name": "Basic Threads",
                "title": "Basic Threads",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/06-concurrency/basic-threads.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/06-concurrency/executor-framework",
                "name": "Executor Framework",
                "title": "Executor Framework",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/06-concurrency/executor-framework.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/06-concurrency/future-completablefuture",
                "name": "Future CompletableFuture",
                "title": "Future CompletableFuture",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/06-concurrency/future-completablefuture.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/06-concurrency/locks",
                "name": "Locks",
                "title": "Locks",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/06-concurrency/locks.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/06-concurrency/synchronization",
                "name": "Synchronization",
                "title": "Synchronization",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/06-concurrency/synchronization.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/07-modern-java",
            "name": "Modern Java",
            "order": 7,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/datetime-api",
                "name": "DateTime API",
                "title": "DateTime API",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/datetime-api.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/default-methods",
                "name": "Default Methods",
                "title": "Default Methods",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/default-methods.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/lambdas",
                "name": "Lambdas",
                "title": "Lambdas",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/lambdas.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/method-references",
                "name": "Method References",
                "title": "Method References",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/method-references.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/optional-deep",
                "name": "Optional Deep",
                "title": "Optional Deep",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/optional-deep.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/records-java-14",
                "name": "Records Java 14",
                "title": "Records Java 14",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/records-java-14.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/sealed-classes-java-17",
                "name": "Sealed Classes Java 17",
                "title": "Sealed Classes Java 17",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/sealed-classes-java-17.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/switch-expressions-java-14",
                "name": "Switch Expressions Java 14",
                "title": "Switch Expressions Java 14",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/switch-expressions-java-14.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/text-blocks-java-13",
                "name": "Text Blocks Java 13",
                "title": "Text Blocks Java 13",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/text-blocks-java-13.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/var-java-10",
                "name": "Var Java 10",
                "title": "Var Java 10",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/var-java-10.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/07-modern-java/virtual-threads-java-21",
                "name": "Virtual Threads Java 21",
                "title": "Virtual Threads Java 21",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/07-modern-java/virtual-threads-java-21.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/09-tools",
            "name": "Tools",
            "order": 9,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/09-tools/gradle",
                "name": "Gradle",
                "title": "Gradle",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/09-tools/gradle.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/09-tools/junit",
                "name": "JUnit",
                "title": "JUnit",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/09-tools/junit.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/09-tools/log4j-slf4j",
                "name": "Log4j SLF4J",
                "title": "Log4j SLF4J",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/09-tools/log4j-slf4j.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/09-tools/lombok",
                "name": "Lombok",
                "title": "Lombok",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/09-tools/lombok.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/09-tools/mapstruct",
                "name": "MapStruct",
                "title": "MapStruct",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/09-tools/mapstruct.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/09-tools/maven",
                "name": "Maven",
                "title": "Maven",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/09-tools/maven.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/java/appendices",
            "name": "Appendices",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "02-languages/java/appendices/code-conventions",
                "name": "Code Conventions",
                "title": "Code Conventions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/appendices/code-conventions.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/appendices/common-annotations",
                "name": "Common Annotations",
                "title": "Common Annotations",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/appendices/common-annotations.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/appendices/design-patterns-java",
                "name": "Design Patterns Java",
                "title": "Design Patterns Java",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/appendices/design-patterns-java.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/appendices/jvm-commands",
                "name": "JVM Commands",
                "title": "JVM Commands",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/appendices/jvm-commands.md"
              },
              {
                "type": "note",
                "id": "02-languages/java/appendices/useful-methods",
                "name": "Useful Methods",
                "title": "Useful Methods",
                "order": 10000,
                "contentSrc": "/notes/02-languages/java/appendices/useful-methods.md"
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "02-languages/javascript",
        "name": "JavaScript",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "02-languages/javascript/00-js-ts-moc",
            "name": "JS TS MOC",
            "title": "JS TS MOC",
            "order": 0,
            "contentSrc": "/notes/02-languages/javascript/00-js-ts-moc.md"
          },
          {
            "type": "folder",
            "id": "02-languages/javascript/01-javascript-fundamentals",
            "name": "JavaScript Fundamentals",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "02-languages/javascript/01-javascript-fundamentals/01-variables-and-data-types",
                "name": "Variables and Data Types",
                "title": "Variables and Data Types",
                "order": 1,
                "contentSrc": "/notes/02-languages/javascript/01-javascript-fundamentals/01-variables-and-data-types.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/01-javascript-fundamentals/02-functions-and-scope",
                "name": "Functions and Scope",
                "title": "Functions and Scope",
                "order": 2,
                "contentSrc": "/notes/02-languages/javascript/01-javascript-fundamentals/02-functions-and-scope.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/01-javascript-fundamentals/03-objects-and-arrays",
                "name": "Objects and Arrays",
                "title": "Objects and Arrays",
                "order": 3,
                "contentSrc": "/notes/02-languages/javascript/01-javascript-fundamentals/03-objects-and-arrays.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/01-javascript-fundamentals/04-control-flow-and-error-handling",
                "name": "Control Flow and Error Handling",
                "title": "Control Flow and Error Handling",
                "order": 4,
                "contentSrc": "/notes/02-languages/javascript/01-javascript-fundamentals/04-control-flow-and-error-handling.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/javascript/02-asynchronous-javascript",
            "name": "Asynchronous JavaScript",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "02-languages/javascript/02-asynchronous-javascript/01-callbacks-and-promises",
                "name": "Callbacks and Promises",
                "title": "Callbacks and Promises",
                "order": 1,
                "contentSrc": "/notes/02-languages/javascript/02-asynchronous-javascript/01-callbacks-and-promises.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/02-asynchronous-javascript/02-async-await",
                "name": "Async Await",
                "title": "Async Await",
                "order": 2,
                "contentSrc": "/notes/02-languages/javascript/02-asynchronous-javascript/02-async-await.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/02-asynchronous-javascript/03-event-loop-basics",
                "name": "Event Loop Basics",
                "title": "Event Loop Basics",
                "order": 3,
                "contentSrc": "/notes/02-languages/javascript/02-asynchronous-javascript/03-event-loop-basics.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/javascript/03-typescript-fundamentals",
            "name": "TypeScript Fundamentals",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "02-languages/javascript/03-typescript-fundamentals/01-basic-types-and-interfaces",
                "name": "Basic Types and Interfaces",
                "title": "Basic Types and Interfaces",
                "order": 1,
                "contentSrc": "/notes/02-languages/javascript/03-typescript-fundamentals/01-basic-types-and-interfaces.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/03-typescript-fundamentals/02-unions-generics-and-type-narrowing",
                "name": "Unions Generics and Type Narrowing",
                "title": "Unions Generics and Type Narrowing",
                "order": 2,
                "contentSrc": "/notes/02-languages/javascript/03-typescript-fundamentals/02-unions-generics-and-type-narrowing.md"
              },
              {
                "type": "note",
                "id": "02-languages/javascript/03-typescript-fundamentals/03-ts-config-and-tooling",
                "name": "TS Config and Tooling",
                "title": "TS Config and Tooling",
                "order": 3,
                "contentSrc": "/notes/02-languages/javascript/03-typescript-fundamentals/03-ts-config-and-tooling.md"
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "02-languages/python",
        "name": "Python",
        "order": 10000,
        "children": [
          {
            "type": "folder",
            "id": "02-languages/python/00-overview",
            "name": "Overview",
            "order": 0,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/00-overview/overview",
                "name": "Overview",
                "title": "Overview",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/00-overview/overview.md"
              }
            ]
          },
          {
            "type": "note",
            "id": "02-languages/python/00-py-moc",
            "name": "PY MOC",
            "title": "PY MOC",
            "order": 0,
            "contentSrc": "/notes/02-languages/python/00-py-moc.md"
          },
          {
            "type": "folder",
            "id": "02-languages/python/01-fundamentals",
            "name": "Fundamentals",
            "order": 1,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/01-fundamentals/control-flow",
                "name": "Control Flow",
                "title": "Control Flow",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/01-fundamentals/control-flow.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/01-fundamentals/data-types",
                "name": "Data Types",
                "title": "Data Types",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/01-fundamentals/data-types.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/01-fundamentals/functions",
                "name": "Functions",
                "title": "Functions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/01-fundamentals/functions.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/01-fundamentals/operators",
                "name": "Operators",
                "title": "Operators",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/01-fundamentals/operators.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/01-fundamentals/strings",
                "name": "Strings",
                "title": "Strings",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/01-fundamentals/strings.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/01-fundamentals/variables-constants",
                "name": "Variables Constants",
                "title": "Variables Constants",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/01-fundamentals/variables-constants.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/02-python-object-model",
            "name": "Python Object Model",
            "order": 2,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/02-python-object-model/dunder-methods",
                "name": "Dunder Methods",
                "title": "Dunder Methods",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/02-python-object-model/dunder-methods.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/02-python-object-model/everything-is-object",
                "name": "Everything Is Object",
                "title": "Everything Is Object",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/02-python-object-model/everything-is-object.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/02-python-object-model/mutability",
                "name": "Mutability",
                "title": "Mutability",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/02-python-object-model/mutability.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/02-python-object-model/namespaces",
                "name": "Namespaces",
                "title": "Namespaces",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/02-python-object-model/namespaces.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/02-python-object-model/types-classes",
                "name": "Types Classes",
                "title": "Types Classes",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/02-python-object-model/types-classes.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/03-oop",
            "name": "OOP",
            "order": 3,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/03-oop/abstract-base-classes",
                "name": "Abstract Base Classes",
                "title": "Abstract Base Classes",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/abstract-base-classes.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/03-oop/classes",
                "name": "Classes",
                "title": "Classes",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/classes.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/03-oop/descriptors",
                "name": "Descriptors",
                "title": "Descriptors",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/descriptors.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/03-oop/encapsulation",
                "name": "Encapsulation",
                "title": "Encapsulation",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/encapsulation.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/03-oop/inheritance",
                "name": "Inheritance",
                "title": "Inheritance",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/inheritance.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/03-oop/mro",
                "name": "MRO",
                "title": "MRO",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/mro.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/03-oop/polymorphism",
                "name": "Polymorphism",
                "title": "Polymorphism",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/03-oop/polymorphism.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/04-collections",
            "name": "Collections",
            "order": 4,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/04-collections/collections-module",
                "name": "Collections Module",
                "title": "Collections Module",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/04-collections/collections-module.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/04-collections/deque",
                "name": "Deque",
                "title": "Deque",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/04-collections/deque.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/04-collections/dictionaries",
                "name": "Dictionaries",
                "title": "Dictionaries",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/04-collections/dictionaries.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/04-collections/lists",
                "name": "Lists",
                "title": "Lists",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/04-collections/lists.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/04-collections/sets",
                "name": "Sets",
                "title": "Sets",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/04-collections/sets.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/04-collections/tuples",
                "name": "Tuples",
                "title": "Tuples",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/04-collections/tuples.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/05-functional-programming",
            "name": "Functional Programming",
            "order": 5,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/05-functional-programming/any-all-zip",
                "name": "Any All zip",
                "title": "Any All zip",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/05-functional-programming/any-all-zip.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/05-functional-programming/functools",
                "name": "functools",
                "title": "functools",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/05-functional-programming/functools.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/05-functional-programming/generator-expressions",
                "name": "Generator Expressions",
                "title": "Generator Expressions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/05-functional-programming/generator-expressions.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/05-functional-programming/list-comprehension",
                "name": "List Comprehension",
                "title": "List Comprehension",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/05-functional-programming/list-comprehension.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/05-functional-programming/map-reduce-filter",
                "name": "Map Reduce Filter",
                "title": "Map Reduce Filter",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/05-functional-programming/map-reduce-filter.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/05-functional-programming/sorted",
                "name": "sorted",
                "title": "sorted",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/05-functional-programming/sorted.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/06-advanced-data-types",
            "name": "Advanced Data Types",
            "order": 6,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/06-advanced-data-types/booleans",
                "name": "Booleans",
                "title": "Booleans",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/06-advanced-data-types/booleans.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/06-advanced-data-types/bytes-bytearray",
                "name": "Bytes Bytearray",
                "title": "Bytes Bytearray",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/06-advanced-data-types/bytes-bytearray.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/06-advanced-data-types/dataclasses",
                "name": "Dataclasses",
                "title": "Dataclasses",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/06-advanced-data-types/dataclasses.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/06-advanced-data-types/enums",
                "name": "Enums",
                "title": "Enums",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/06-advanced-data-types/enums.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/06-advanced-data-types/numbers",
                "name": "Numbers",
                "title": "Numbers",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/06-advanced-data-types/numbers.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/07-error-handling",
            "name": "Error Handling",
            "order": 7,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/07-error-handling/custom-exceptions",
                "name": "Custom Exceptions",
                "title": "Custom Exceptions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/07-error-handling/custom-exceptions.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/07-error-handling/exceptions",
                "name": "Exceptions",
                "title": "Exceptions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/07-error-handling/exceptions.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/07-error-handling/raise-try-except",
                "name": "Raise Try Except",
                "title": "Raise Try Except",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/07-error-handling/raise-try-except.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/08-modules-packages",
            "name": "Modules Packages",
            "order": 8,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/08-modules-packages/import-system",
                "name": "Import System",
                "title": "Import System",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/08-modules-packages/import-system.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/08-modules-packages/packages",
                "name": "Packages",
                "title": "Packages",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/08-modules-packages/packages.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/08-modules-packages/pip-virtualenv",
                "name": "PIP VirtualEnv",
                "title": "PIP VirtualEnv",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/08-modules-packages/pip-virtualenv.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/08-modules-packages/standard-library",
                "name": "Standard Library",
                "title": "Standard Library",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/08-modules-packages/standard-library.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "02-languages/python/appendices",
            "name": "Appendices",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "02-languages/python/appendices/built-in-functions",
                "name": "Built in Functions",
                "title": "Built in Functions",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/appendices/built-in-functions.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/appendices/common-patterns",
                "name": "Common Patterns",
                "title": "Common Patterns",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/appendices/common-patterns.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/appendices/python-vm",
                "name": "Python VM",
                "title": "Python VM",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/appendices/python-vm.md"
              },
              {
                "type": "note",
                "id": "02-languages/python/appendices/style-guide",
                "name": "Style Guide",
                "title": "Style Guide",
                "order": 10000,
                "contentSrc": "/notes/02-languages/python/appendices/style-guide.md"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "folder",
    "id": "03-backend",
    "name": "Backend",
    "order": 3,
    "children": [
      {
        "type": "folder",
        "id": "03-backend/00-introduction",
        "name": "Introduction",
        "order": 0,
        "children": [
          {
            "type": "note",
            "id": "03-backend/00-introduction/01-welcome-to-the-machine",
            "name": "Welcome to the Machine",
            "title": "Welcome to the Machine",
            "order": 1,
            "contentSrc": "/notes/03-backend/00-introduction/01-welcome-to-the-machine.md"
          },
          {
            "type": "note",
            "id": "03-backend/00-introduction/02-the-backend-glosary",
            "name": "The Backend Glosary",
            "title": "The Backend Glosary",
            "order": 2,
            "contentSrc": "/notes/03-backend/00-introduction/02-the-backend-glosary.md"
          },
          {
            "type": "note",
            "id": "03-backend/00-introduction/03-history-and-evolution",
            "name": "History and Evolution",
            "title": "History and Evolution",
            "order": 3,
            "contentSrc": "/notes/03-backend/00-introduction/03-history-and-evolution.md"
          },
          {
            "type": "note",
            "id": "03-backend/00-introduction/04-the-perfect-api-design",
            "name": "The Perfect API Design",
            "title": "The Perfect API Design",
            "order": 4,
            "contentSrc": "/notes/03-backend/00-introduction/04-the-perfect-api-design.md"
          }
        ]
      },
      {
        "type": "note",
        "id": "03-backend/00-moc",
        "name": "MOC",
        "title": "MOC",
        "order": 0,
        "contentSrc": "/notes/03-backend/00-moc.md"
      },
      {
        "type": "folder",
        "id": "03-backend/01-frameworks",
        "name": "Frameworks",
        "order": 1,
        "children": [
          {
            "type": "folder",
            "id": "03-backend/01-frameworks/django",
            "name": "Django",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "03-backend/01-frameworks/django/00-django-moc",
                "name": "Django MOC",
                "title": "Django MOC",
                "order": 0,
                "contentSrc": "/notes/03-backend/01-frameworks/django/00-django-moc.md"
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/django/01-core-foundations",
                "name": "Core Foundations",
                "order": 1,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/01-core-foundations/01-project-vs-app-structure",
                    "name": "Project vs App Structure",
                    "title": "Project vs App Structure",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/01-core-foundations/01-project-vs-app-structure.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/01-core-foundations/02-the-mvt-pattern",
                    "name": "The MVT Pattern",
                    "title": "The MVT Pattern",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/01-core-foundations/02-the-mvt-pattern.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/01-core-foundations/03-django-cli-and-manage",
                    "name": "Django CLI and Manage",
                    "title": "Django CLI and Manage",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/01-core-foundations/03-django-cli-and-manage.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/django/02-data-and-orm",
                "name": "Data and ORM",
                "order": 2,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/02-data-and-orm/01-model-definitions-fields",
                    "name": "Model Definitions Fields",
                    "title": "Model Definitions Fields",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/02-data-and-orm/01-model-definitions-fields.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/02-data-and-orm/02-database-migrations",
                    "name": "Database Migrations",
                    "title": "Database Migrations",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/02-data-and-orm/02-database-migrations.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/02-data-and-orm/03-querysets-and-managers",
                    "name": "QuerySets and Managers",
                    "title": "QuerySets and Managers",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/02-data-and-orm/03-querysets-and-managers.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/02-data-and-orm/04-advanced-orm-optimization",
                    "name": "Advanced ORM Optimization",
                    "title": "Advanced ORM Optimization",
                    "order": 4,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/02-data-and-orm/04-advanced-orm-optimization.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/django/03-views-and-routing",
                "name": "Views and Routing",
                "order": 3,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/03-views-and-routing/01-url-routing-and-resolvers",
                    "name": "URL Routing and Resolvers",
                    "title": "URL Routing and Resolvers",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/03-views-and-routing/01-url-routing-and-resolvers.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/03-views-and-routing/02-function-based-views",
                    "name": "Function Based Views",
                    "title": "Function Based Views",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/03-views-and-routing/02-function-based-views.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/03-views-and-routing/03-class-based-views",
                    "name": "Class Based Views",
                    "title": "Class Based Views",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/03-views-and-routing/03-class-based-views.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/03-views-and-routing/04-middleware-chain",
                    "name": "Middleware Chain",
                    "title": "Middleware Chain",
                    "order": 4,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/03-views-and-routing/04-middleware-chain.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/django/04-django-rest-framework",
                "name": "Django REST Framework",
                "order": 4,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/04-django-rest-framework/01-drf-architecture-overview",
                    "name": "DRF Architecture Overview",
                    "title": "DRF Architecture Overview",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/04-django-rest-framework/01-drf-architecture-overview.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/04-django-rest-framework/02-serializers-deep-dive",
                    "name": "Serializers Deep Dive",
                    "title": "Serializers Deep Dive",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/04-django-rest-framework/02-serializers-deep-dive.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/04-django-rest-framework/03-api-views-and-viewsets",
                    "name": "API Views and ViewSets",
                    "title": "API Views and ViewSets",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/04-django-rest-framework/03-api-views-and-viewsets.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/04-django-rest-framework/04-authentication-permissions",
                    "name": "Authentication Permissions",
                    "title": "Authentication Permissions",
                    "order": 4,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/04-django-rest-framework/04-authentication-permissions.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/django/05-advanced-and-ecosystem",
                "name": "Advanced and Ecosystem",
                "order": 5,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/05-advanced-and-ecosystem/01-django-signals",
                    "name": "Django Signals",
                    "title": "Django Signals",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/05-advanced-and-ecosystem/01-django-signals.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/05-advanced-and-ecosystem/02-security-best-practices",
                    "name": "Security Best Practices",
                    "title": "Security Best Practices",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/05-advanced-and-ecosystem/02-security-best-practices.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/django/05-advanced-and-ecosystem/03-async-django-and-channels",
                    "name": "Async Django and Channels",
                    "title": "Async Django and Channels",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/django/05-advanced-and-ecosystem/03-async-django-and-channels.md"
                  }
                ]
              }
            ]
          },
          {
            "type": "folder",
            "id": "03-backend/01-frameworks/fastapi",
            "name": "FastAPI",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "03-backend/01-frameworks/fastapi/00-fastapi-moc",
                "name": "FastAPI MOC",
                "title": "FastAPI MOC",
                "order": 0,
                "contentSrc": "/notes/03-backend/01-frameworks/fastapi/00-fastapi-moc.md"
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/fastapi/01-core-and-routing",
                "name": "Core and Routing",
                "order": 1,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/01-core-and-routing/01-asgi-vs-wsgi",
                    "name": "ASGI vs WSGI",
                    "title": "ASGI vs WSGI",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/01-core-and-routing/01-asgi-vs-wsgi.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/01-core-and-routing/02-declaring-endpoints",
                    "name": "Declaring Endpoints",
                    "title": "Declaring Endpoints",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/01-core-and-routing/02-declaring-endpoints.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/01-core-and-routing/03-the-dependency-injection",
                    "name": "The Dependency Injection",
                    "title": "The Dependency Injection",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/01-core-and-routing/03-the-dependency-injection.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/fastapi/02-data-validation-pydantic",
                "name": "Data Validation Pydantic",
                "order": 2,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/02-data-validation-pydantic/01-pydantic-v2-foundations",
                    "name": "Pydantic V2 Foundations",
                    "title": "Pydantic V2 Foundations",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/02-data-validation-pydantic/01-pydantic-v2-foundations.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/02-data-validation-pydantic/02-data-shaping-schemas",
                    "name": "Data Shaping Schemas",
                    "title": "Data Shaping Schemas",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/02-data-validation-pydantic/02-data-shaping-schemas.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/02-data-validation-pydantic/03-custom-validators",
                    "name": "Custom Validators",
                    "title": "Custom Validators",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/02-data-validation-pydantic/03-custom-validators.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/fastapi/03-database-and-external-orms",
                "name": "Database and External ORMs",
                "order": 3,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/03-database-and-external-orms/01-decoupling-the-orm",
                    "name": "Decoupling The ORM",
                    "title": "Decoupling The ORM",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/03-database-and-external-orms/01-decoupling-the-orm.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/03-database-and-external-orms/02-async-database-sessions",
                    "name": "Async Database Sessions",
                    "title": "Async Database Sessions",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/03-database-and-external-orms/02-async-database-sessions.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/03-database-and-external-orms/03-migrations-with-alembic",
                    "name": "Migrations with Alembic",
                    "title": "Migrations with Alembic",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/03-database-and-external-orms/03-migrations-with-alembic.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/fastapi/04-concurrency-and-advanced",
                "name": "Concurrency and Advanced",
                "order": 4,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/04-concurrency-and-advanced/01-async-await-deep-dive",
                    "name": "Async Await Deep Dive",
                    "title": "Async Await Deep Dive",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/04-concurrency-and-advanced/01-async-await-deep-dive.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/04-concurrency-and-advanced/02-background-tasks",
                    "name": "Background Tasks",
                    "title": "Background Tasks",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/04-concurrency-and-advanced/02-background-tasks.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/fastapi/04-concurrency-and-advanced/03-global-error-handling",
                    "name": "Global Error Handling",
                    "title": "Global Error Handling",
                    "order": 3,
                    "contentSrc": "/notes/03-backend/01-frameworks/fastapi/04-concurrency-and-advanced/03-global-error-handling.md"
                  }
                ]
              }
            ]
          },
          {
            "type": "folder",
            "id": "03-backend/01-frameworks/spring-boot",
            "name": "Spring Boot",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "03-backend/01-frameworks/spring-boot/00-spring-moc",
                "name": "Spring MOC",
                "title": "Spring MOC",
                "order": 0,
                "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/00-spring-moc.md"
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/spring-boot/01-core-and-internals",
                "name": "Core and Internals",
                "order": 1,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/01-core-and-internals/01-spring-core-and-ioc",
                    "name": "Spring Core and IoC",
                    "title": "Spring Core and IoC",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/01-core-and-internals/01-spring-core-and-ioc.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/01-core-and-internals/02-autoconfiguration-lifecycle",
                    "name": "Autoconfiguration Lifecycle",
                    "title": "Autoconfiguration Lifecycle",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/01-core-and-internals/02-autoconfiguration-lifecycle.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/spring-boot/02-configuration-and-environments",
                "name": "Configuration and Environments",
                "order": 2,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/02-configuration-and-environments/01-properties-profiles-and-yaml",
                    "name": "Properties Profiles and YAML",
                    "title": "Properties Profiles and YAML",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/02-configuration-and-environments/01-properties-profiles-and-yaml.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/spring-boot/03-data-and-persistence",
                "name": "Data and Persistence",
                "order": 3,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/03-data-and-persistence/01-jpa-hibernate-and-data-jdbc",
                    "name": "JPA Hibernate and Data JDBC",
                    "title": "JPA Hibernate and Data JDBC",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/03-data-and-persistence/01-jpa-hibernate-and-data-jdbc.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/03-data-and-persistence/02-transaction-management",
                    "name": "Transaction Management",
                    "title": "Transaction Management",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/03-data-and-persistence/02-transaction-management.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/spring-boot/04-web-and-api-layer",
                "name": "Web and API Layer",
                "order": 4,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/04-web-and-api-layer/01-rest-controllers-and-mvc",
                    "name": "REST Controllers and MVC",
                    "title": "REST Controllers and MVC",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/04-web-and-api-layer/01-rest-controllers-and-mvc.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/04-web-and-api-layer/02-global-exception-handling",
                    "name": "Global Exception Handling",
                    "title": "Global Exception Handling",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/04-web-and-api-layer/02-global-exception-handling.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/spring-boot/05-security-and-identity",
                "name": "Security and Identity",
                "order": 5,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/05-security-and-identity/01-spring-security-architecture",
                    "name": "Spring Security Architecture",
                    "title": "Spring Security Architecture",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/05-security-and-identity/01-spring-security-architecture.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "03-backend/01-frameworks/spring-boot/06-testing-and-observability",
                "name": "Testing and Observability",
                "order": 6,
                "children": [
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/06-testing-and-observability/01-testing-slice-annotations",
                    "name": "Testing Slice Annotations",
                    "title": "Testing Slice Annotations",
                    "order": 1,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/06-testing-and-observability/01-testing-slice-annotations.md"
                  },
                  {
                    "type": "note",
                    "id": "03-backend/01-frameworks/spring-boot/06-testing-and-observability/02-actuator-and-metrics",
                    "name": "Actuator and Metrics",
                    "title": "Actuator and Metrics",
                    "order": 2,
                    "contentSrc": "/notes/03-backend/01-frameworks/spring-boot/06-testing-and-observability/02-actuator-and-metrics.md"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "03-backend/02-architecture-patterns",
        "name": "Architecture Patterns",
        "order": 2,
        "children": [
          {
            "type": "note",
            "id": "03-backend/02-architecture-patterns/01-monoliths-vs-microservices",
            "name": "Monoliths vs Microservices",
            "title": "Monoliths vs Microservices",
            "order": 1,
            "contentSrc": "/notes/03-backend/02-architecture-patterns/01-monoliths-vs-microservices.md"
          },
          {
            "type": "note",
            "id": "03-backend/02-architecture-patterns/02-modular-monoliths",
            "name": "Modular Monoliths",
            "title": "Modular Monoliths",
            "order": 2,
            "contentSrc": "/notes/03-backend/02-architecture-patterns/02-modular-monoliths.md"
          },
          {
            "type": "note",
            "id": "03-backend/02-architecture-patterns/03-clean-architecture",
            "name": "Clean Architecture",
            "title": "Clean Architecture",
            "order": 3,
            "contentSrc": "/notes/03-backend/02-architecture-patterns/03-clean-architecture.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "03-backend/03-communication-patterns",
        "name": "Communication Patterns",
        "order": 3,
        "children": [
          {
            "type": "note",
            "id": "03-backend/03-communication-patterns/01-sync-vs-async",
            "name": "Sync vs Async",
            "title": "Sync vs Async",
            "order": 1,
            "contentSrc": "/notes/03-backend/03-communication-patterns/01-sync-vs-async.md"
          },
          {
            "type": "note",
            "id": "03-backend/03-communication-patterns/02-grpc-deep-dive",
            "name": "gRPC Deep Dive",
            "title": "gRPC Deep Dive",
            "order": 2,
            "contentSrc": "/notes/03-backend/03-communication-patterns/02-grpc-deep-dive.md"
          },
          {
            "type": "note",
            "id": "03-backend/03-communication-patterns/03-serialization-protocols",
            "name": "Serialization Protocols",
            "title": "Serialization Protocols",
            "order": 3,
            "contentSrc": "/notes/03-backend/03-communication-patterns/03-serialization-protocols.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "03-backend/05-messaging-and-events",
        "name": "Messaging and Events",
        "order": 5,
        "children": [
          {
            "type": "folder",
            "id": "03-backend/05-messaging-and-events/02-kafka",
            "name": "Kafka",
            "order": 2,
            "children": [
              {
                "type": "folder",
                "id": "03-backend/05-messaging-and-events/02-kafka/learning",
                "name": "learning",
                "order": 10000,
                "children": [
                  {
                    "type": "folder",
                    "id": "03-backend/05-messaging-and-events/02-kafka/learning/01-foundations",
                    "name": "foundations",
                    "order": 1,
                    "children": [
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/01-what-is-kafka",
                        "name": "what is kafka",
                        "title": "what is kafka",
                        "order": 1,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/01-what-is-kafka.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/02-core-concepts",
                        "name": "core concepts",
                        "title": "core concepts",
                        "order": 2,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/02-core-concepts.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/03-producers-consumers",
                        "name": "producers consumers",
                        "title": "producers consumers",
                        "order": 3,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/03-producers-consumers.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/04-topics-partitions-offsets",
                        "name": "topics partitions offsets",
                        "title": "topics partitions offsets",
                        "order": 4,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/04-topics-partitions-offsets.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/05-brokers-clusters",
                        "name": "brokers clusters",
                        "title": "brokers clusters",
                        "order": 5,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/01-foundations/05-brokers-clusters.md"
                      }
                    ]
                  },
                  {
                    "type": "folder",
                    "id": "03-backend/05-messaging-and-events/02-kafka/learning/02-architecture",
                    "name": "architecture",
                    "order": 2,
                    "children": [
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/01-replication-and-acks",
                        "name": "replication and acks",
                        "title": "replication and acks",
                        "order": 1,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/01-replication-and-acks.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/02-consumer-groups",
                        "name": "consumer groups",
                        "title": "consumer groups",
                        "order": 2,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/02-consumer-groups.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/03-partition-rebalancing",
                        "name": "partition rebalancing",
                        "title": "partition rebalancing",
                        "order": 3,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/03-partition-rebalancing.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/04-zookeeper-kraft",
                        "name": "zookeeper kraft",
                        "title": "zookeeper kraft",
                        "order": 4,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/04-zookeeper-kraft.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/05-log-compaction",
                        "name": "log compaction",
                        "title": "log compaction",
                        "order": 5,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/02-architecture/05-log-compaction.md"
                      }
                    ]
                  },
                  {
                    "type": "folder",
                    "id": "03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns",
                    "name": "production patterns",
                    "order": 3,
                    "children": [
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/01-message-ordering-guarantees",
                        "name": "message ordering guarantees",
                        "title": "message ordering guarantees",
                        "order": 1,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/01-message-ordering-guarantees.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/02-idempotent-producers",
                        "name": "idempotent producers",
                        "title": "idempotent producers",
                        "order": 2,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/02-idempotent-producers.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/03-transactions",
                        "name": "transactions",
                        "title": "transactions",
                        "order": 3,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/03-transactions.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/04-dead-letter-queues",
                        "name": "dead letter queues",
                        "title": "dead letter queues",
                        "order": 4,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/04-dead-letter-queues.md"
                      },
                      {
                        "type": "note",
                        "id": "03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/05-schema-registry-avro",
                        "name": "schema registry avro",
                        "title": "schema registry avro",
                        "order": 5,
                        "contentSrc": "/notes/03-backend/05-messaging-and-events/02-kafka/learning/03-production-patterns/05-schema-registry-avro.md"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "03-backend/06-observability-and-security",
        "name": "Observability and Security",
        "order": 6,
        "children": [
          {
            "type": "note",
            "id": "03-backend/06-observability-and-security/01-the-three-pillars",
            "name": "The Three Pillars",
            "title": "The Three Pillars",
            "order": 1,
            "contentSrc": "/notes/03-backend/06-observability-and-security/01-the-three-pillars.md"
          },
          {
            "type": "note",
            "id": "03-backend/06-observability-and-security/02-authentication-authz",
            "name": "Authentication AuthZ",
            "title": "Authentication AuthZ",
            "order": 2,
            "contentSrc": "/notes/03-backend/06-observability-and-security/02-authentication-authz.md"
          },
          {
            "type": "note",
            "id": "03-backend/06-observability-and-security/03-rate-limiting-cors",
            "name": "Rate Limiting CORS",
            "title": "Rate Limiting CORS",
            "order": 3,
            "contentSrc": "/notes/03-backend/06-observability-and-security/03-rate-limiting-cors.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "03-backend/07-backend-comunication-patterns",
        "name": "Backend Comunication Patterns",
        "order": 7,
        "children": []
      }
    ]
  },
  {
    "type": "folder",
    "id": "04-devops-cloud",
    "name": "DevOps Cloud",
    "order": 4,
    "children": [
      {
        "type": "note",
        "id": "04-devops-cloud/00-moc",
        "name": "MOC",
        "title": "MOC",
        "order": 0,
        "contentSrc": "/notes/04-devops-cloud/00-moc.md"
      },
      {
        "type": "folder",
        "id": "04-devops-cloud/01-containers",
        "name": "Containers",
        "order": 1,
        "children": [
          {
            "type": "folder",
            "id": "04-devops-cloud/01-containers/docker",
            "name": "Docker",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "04-devops-cloud/01-containers/docker/00-docker-moc",
                "name": "Docker MOC",
                "title": "Docker MOC",
                "order": 0,
                "contentSrc": "/notes/04-devops-cloud/01-containers/docker/00-docker-moc.md"
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/01-fundamentals",
                "name": "Fundamentals",
                "order": 1,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/01-fundamentals/01-what-is-docker",
                    "name": "What Is Docker",
                    "title": "What Is Docker",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/01-fundamentals/01-what-is-docker.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/01-fundamentals/02-containers-vs-virtual-machines",
                    "name": "Containers vs Virtual Machines",
                    "title": "Containers vs Virtual Machines",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/01-fundamentals/02-containers-vs-virtual-machines.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/01-fundamentals/03-docker-architecture-engine-daemon-client",
                    "name": "Docker Architecture Engine Daemon Client",
                    "title": "Docker Architecture Engine Daemon Client",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/01-fundamentals/03-docker-architecture-engine-daemon-client.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/01-fundamentals/04-docker-objects-overview",
                    "name": "Docker Objects Overview",
                    "title": "Docker Objects Overview",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/01-fundamentals/04-docker-objects-overview.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/02-images",
                "name": "Images",
                "order": 2,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/02-images/01-images-vs-containers",
                    "name": "Images vs Containers",
                    "title": "Images vs Containers",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/02-images/01-images-vs-containers.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/02-images/02-image-layers-and-caching",
                    "name": "Image Layers and Caching",
                    "title": "Image Layers and Caching",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/02-images/02-image-layers-and-caching.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/02-images/03-tags-and-digests",
                    "name": "Tags and Digests",
                    "title": "Tags and Digests",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/02-images/03-tags-and-digests.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/02-images/04-multi-stage-builds",
                    "name": "Multi Stage Builds",
                    "title": "Multi Stage Builds",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/02-images/04-multi-stage-builds.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/03-dockerfile",
                "name": "Dockerfile",
                "order": 3,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/03-dockerfile/01-dockerfile-syntax-and-instructions",
                    "name": "Dockerfile Syntax and Instructions",
                    "title": "Dockerfile Syntax and Instructions",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/03-dockerfile/01-dockerfile-syntax-and-instructions.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/03-dockerfile/02-entrypoint-vs-cmd",
                    "name": "ENTRYPOINT vs CMD",
                    "title": "ENTRYPOINT vs CMD",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/03-dockerfile/02-entrypoint-vs-cmd.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/03-dockerfile/03-env-arg-and-build-args",
                    "name": "ENV ARG and Build Args",
                    "title": "ENV ARG and Build Args",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/03-dockerfile/03-env-arg-and-build-args.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/03-dockerfile/04-copy-vs-add",
                    "name": "COPY vs ADD",
                    "title": "COPY vs ADD",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/03-dockerfile/04-copy-vs-add.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/03-dockerfile/05-dockerfile-best-practices",
                    "name": "Dockerfile Best Practices",
                    "title": "Dockerfile Best Practices",
                    "order": 5,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/03-dockerfile/05-dockerfile-best-practices.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/04-containers-and-lifecycle",
                "name": "Containers and Lifecycle",
                "order": 4,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/01-container-lifecycle-states",
                    "name": "Container Lifecycle States",
                    "title": "Container Lifecycle States",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/01-container-lifecycle-states.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/02-container-networking-modes",
                    "name": "Container Networking Modes",
                    "title": "Container Networking Modes",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/02-container-networking-modes.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/03-restart-policies",
                    "name": "Restart Policies",
                    "title": "Restart Policies",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/03-restart-policies.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/04-resource-limits-cpu-memory",
                    "name": "Resource Limits CPU Memory",
                    "title": "Resource Limits CPU Memory",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/04-containers-and-lifecycle/04-resource-limits-cpu-memory.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/05-cli-commands",
                "name": "CLI Commands",
                "order": 5,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/05-cli-commands/01-image-commands-build-pull-push-rmi",
                    "name": "Image Commands build pull push rmi",
                    "title": "Image Commands build pull push rmi",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/05-cli-commands/01-image-commands-build-pull-push-rmi.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/05-cli-commands/02-container-commands-run-ps-stop-rm",
                    "name": "Container Commands run ps stop rm",
                    "title": "Container Commands run ps stop rm",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/05-cli-commands/02-container-commands-run-ps-stop-rm.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/05-cli-commands/03-inspecting-commands-logs-exec-inspect-top",
                    "name": "Inspecting Commands logs exec inspect top",
                    "title": "Inspecting Commands logs exec inspect top",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/05-cli-commands/03-inspecting-commands-logs-exec-inspect-top.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/05-cli-commands/04-system-commands-system-prune-stats",
                    "name": "System Commands system prune stats",
                    "title": "System Commands system prune stats",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/05-cli-commands/04-system-commands-system-prune-stats.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/05-cli-commands/05-docker-cli-cheatsheet",
                    "name": "Docker CLI Cheatsheet",
                    "title": "Docker CLI Cheatsheet",
                    "order": 5,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/05-cli-commands/05-docker-cli-cheatsheet.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage",
                "name": "Volumes and Storage",
                "order": 6,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage/01-volumes-overview",
                    "name": "Volumes Overview",
                    "title": "Volumes Overview",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/06-volumes-and-storage/01-volumes-overview.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage/02-named-volumes",
                    "name": "Named Volumes",
                    "title": "Named Volumes",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/06-volumes-and-storage/02-named-volumes.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage/03-anonymous-volumes",
                    "name": "Anonymous Volumes",
                    "title": "Anonymous Volumes",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/06-volumes-and-storage/03-anonymous-volumes.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage/04-bind-mounts",
                    "name": "Bind Mounts",
                    "title": "Bind Mounts",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/06-volumes-and-storage/04-bind-mounts.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage/05-tmpfs-mounts",
                    "name": "tmpfs Mounts",
                    "title": "tmpfs Mounts",
                    "order": 5,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/06-volumes-and-storage/05-tmpfs-mounts.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/06-volumes-and-storage/06-volume-drivers-and-backup",
                    "name": "Volume Drivers and Backup",
                    "title": "Volume Drivers and Backup",
                    "order": 6,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/06-volumes-and-storage/06-volume-drivers-and-backup.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/07-networking",
                "name": "Networking",
                "order": 7,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/07-networking/01-docker-network-drivers",
                    "name": "Docker Network Drivers",
                    "title": "Docker Network Drivers",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/07-networking/01-docker-network-drivers.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/07-networking/02-bridge-network",
                    "name": "Bridge Network",
                    "title": "Bridge Network",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/07-networking/02-bridge-network.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/07-networking/03-host-network",
                    "name": "Host Network",
                    "title": "Host Network",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/07-networking/03-host-network.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/07-networking/04-overlay-network",
                    "name": "Overlay Network",
                    "title": "Overlay Network",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/07-networking/04-overlay-network.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/07-networking/05-custom-networks-and-dns",
                    "name": "Custom Networks and DNS",
                    "title": "Custom Networks and DNS",
                    "order": 5,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/07-networking/05-custom-networks-and-dns.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/07-networking/06-port-mapping",
                    "name": "Port Mapping",
                    "title": "Port Mapping",
                    "order": 6,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/07-networking/06-port-mapping.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/08-docker-compose",
                "name": "Docker Compose",
                "order": 8,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/08-docker-compose/01-compose-file-structure",
                    "name": "Compose File Structure",
                    "title": "Compose File Structure",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/08-docker-compose/01-compose-file-structure.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/08-docker-compose/02-services-networks-volumes",
                    "name": "Services Networks Volumes",
                    "title": "Services Networks Volumes",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/08-docker-compose/02-services-networks-volumes.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/08-docker-compose/03-environment-variables-and-env-files",
                    "name": "Environment Variables and env files",
                    "title": "Environment Variables and env files",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/08-docker-compose/03-environment-variables-and-env-files.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/08-docker-compose/04-compose-cli-commands",
                    "name": "Compose CLI Commands",
                    "title": "Compose CLI Commands",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/08-docker-compose/04-compose-cli-commands.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/08-docker-compose/05-multi-container-app-example",
                    "name": "Multi Container App Example",
                    "title": "Multi Container App Example",
                    "order": 5,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/08-docker-compose/05-multi-container-app-example.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/09-registries-and-distribution",
                "name": "Registries and Distribution",
                "order": 9,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/09-registries-and-distribution/01-docker-hub",
                    "name": "Docker Hub",
                    "title": "Docker Hub",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/09-registries-and-distribution/01-docker-hub.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/09-registries-and-distribution/02-private-registries",
                    "name": "Private Registries",
                    "title": "Private Registries",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/09-registries-and-distribution/02-private-registries.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/09-registries-and-distribution/03-image-publishing-workflow",
                    "name": "Image Publishing Workflow",
                    "title": "Image Publishing Workflow",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/09-registries-and-distribution/03-image-publishing-workflow.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/10-security",
                "name": "Security",
                "order": 10,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/10-security/01-running-as-non-root",
                    "name": "Running as Non Root",
                    "title": "Running as Non Root",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/10-security/01-running-as-non-root.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/10-security/02-image-scanning",
                    "name": "Image Scanning",
                    "title": "Image Scanning",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/10-security/02-image-scanning.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/10-security/03-secrets-management",
                    "name": "Secrets Management",
                    "title": "Secrets Management",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/10-security/03-secrets-management.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced",
                "name": "Ecosystem and Advanced",
                "order": 11,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced/01-docker-swarm-overview",
                    "name": "Docker Swarm Overview",
                    "title": "Docker Swarm Overview",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced/01-docker-swarm-overview.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced/02-docker-in-ci-cd",
                    "name": "Docker in CI CD",
                    "title": "Docker in CI CD",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced/02-docker-in-ci-cd.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced/03-docker-vs-podman",
                    "name": "Docker vs Podman",
                    "title": "Docker vs Podman",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/docker/11-ecosystem-and-advanced/03-docker-vs-podman.md"
                  }
                ]
              },
              {
                "type": "note",
                "id": "04-devops-cloud/01-containers/docker/docker-engine",
                "name": "Docker Engine",
                "title": "Docker Engine",
                "order": 10000,
                "contentSrc": "/notes/04-devops-cloud/01-containers/docker/docker-engine.md"
              },
              {
                "type": "note",
                "id": "04-devops-cloud/01-containers/docker/overview",
                "name": "Overview",
                "title": "Overview",
                "order": 10000,
                "contentSrc": "/notes/04-devops-cloud/01-containers/docker/overview.md"
              }
            ]
          },
          {
            "type": "folder",
            "id": "04-devops-cloud/01-containers/kubernetes",
            "name": "Kubernetes",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "04-devops-cloud/01-containers/kubernetes/00-k8s-moc",
                "name": "K8s MOC",
                "title": "K8s MOC",
                "order": 0,
                "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/00-k8s-moc.md"
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster",
                "name": "Architecture and Cluster",
                "order": 1,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster/01-control-plane-components",
                    "name": "Control Plane Components",
                    "title": "Control Plane Components",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster/01-control-plane-components.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster/02-worker-nodes-anatomy",
                    "name": "Worker Nodes Anatomy",
                    "title": "Worker Nodes Anatomy",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster/02-worker-nodes-anatomy.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster/03-declarative-vs-imperative",
                    "name": "Declarative Vs Imperative",
                    "title": "Declarative Vs Imperative",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/01-architecture-and-cluster/03-declarative-vs-imperative.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute",
                "name": "Workloads and Compute",
                "order": 2,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/01-pods-lifecycle",
                    "name": "Pods Lifecycle",
                    "title": "Pods Lifecycle",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/01-pods-lifecycle.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/02-replicasets",
                    "name": "ReplicaSets",
                    "title": "ReplicaSets",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/02-replicasets.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/03-deployments",
                    "name": "Deployments",
                    "title": "Deployments",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/03-deployments.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/04-statefulsets-and-jobs",
                    "name": "StatefulSets and Jobs",
                    "title": "StatefulSets and Jobs",
                    "order": 4,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/02-workloads-and-compute/04-statefulsets-and-jobs.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/kubernetes/03-networking-and-services",
                "name": "Networking and Services",
                "order": 3,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/03-networking-and-services/01-clusterip-nodeport-lb",
                    "name": "ClusterIP NodePort LB",
                    "title": "ClusterIP NodePort LB",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/03-networking-and-services/01-clusterip-nodeport-lb.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/03-networking-and-services/02-ingress-controllers",
                    "name": "Ingress Controllers",
                    "title": "Ingress Controllers",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/03-networking-and-services/02-ingress-controllers.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/03-networking-and-services/03-pod-networking-cni",
                    "name": "Pod Networking CNI",
                    "title": "Pod Networking CNI",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/03-networking-and-services/03-pod-networking-cni.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage",
                "name": "Configuration and Storage",
                "order": 4,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage/01-configmaps-and-secrets",
                    "name": "ConfigMaps and Secrets",
                    "title": "ConfigMaps and Secrets",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage/01-configmaps-and-secrets.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage/02-volumes-and-mounts",
                    "name": "Volumes and Mounts",
                    "title": "Volumes and Mounts",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage/02-volumes-and-mounts.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage/03-persistent-volumes-pv-pvc",
                    "name": "Persistent Volumes PV PVC",
                    "title": "Persistent Volumes PV PVC",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/04-configuration-and-storage/03-persistent-volumes-pv-pvc.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/01-containers/kubernetes/05-advanced-ops",
                "name": "Advanced Ops",
                "order": 5,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/05-advanced-ops/01-probes-healthchecks",
                    "name": "Probes Healthchecks",
                    "title": "Probes Healthchecks",
                    "order": 1,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/05-advanced-ops/01-probes-healthchecks.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/05-advanced-ops/02-resource-management",
                    "name": "Resource Management",
                    "title": "Resource Management",
                    "order": 2,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/05-advanced-ops/02-resource-management.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/01-containers/kubernetes/05-advanced-ops/03-namespaces-and-rbac",
                    "name": "Namespaces and RBAC",
                    "title": "Namespaces and RBAC",
                    "order": 3,
                    "contentSrc": "/notes/04-devops-cloud/01-containers/kubernetes/05-advanced-ops/03-namespaces-and-rbac.md"
                  }
                ]
              }
            ]
          },
          {
            "type": "note",
            "id": "04-devops-cloud/01-containers/virtual-machines",
            "name": "Virtual Machines",
            "title": "Virtual Machines",
            "order": 10000,
            "contentSrc": "/notes/04-devops-cloud/01-containers/virtual-machines.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "04-devops-cloud/02-cloud-providers",
        "name": "Cloud Providers",
        "order": 2,
        "children": [
          {
            "type": "note",
            "id": "04-devops-cloud/02-cloud-providers/00-overview",
            "name": "Overview",
            "title": "Overview",
            "order": 0,
            "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/00-overview.md"
          },
          {
            "type": "note",
            "id": "04-devops-cloud/02-cloud-providers/01-service-models",
            "name": "Service Models",
            "title": "Service Models",
            "order": 1,
            "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/01-service-models.md"
          },
          {
            "type": "note",
            "id": "04-devops-cloud/02-cloud-providers/02-deploy-models",
            "name": "Deploy Models",
            "title": "Deploy Models",
            "order": 2,
            "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/02-deploy-models.md"
          },
          {
            "type": "note",
            "id": "04-devops-cloud/02-cloud-providers/03-providers",
            "name": "Providers",
            "title": "Providers",
            "order": 3,
            "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/03-providers.md"
          },
          {
            "type": "folder",
            "id": "04-devops-cloud/02-cloud-providers/aws",
            "name": "AWS",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "04-devops-cloud/02-cloud-providers/aws/00-overview",
                "name": "Overview",
                "title": "Overview",
                "order": 0,
                "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/00-overview.md"
              },
              {
                "type": "note",
                "id": "04-devops-cloud/02-cloud-providers/aws/01-certifications",
                "name": "Certifications",
                "title": "Certifications",
                "order": 1,
                "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/01-certifications.md"
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/computing",
                "name": "Computing",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/computing/ec2",
                    "name": "EC2",
                    "title": "EC2",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/computing/ec2.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/computing/ecs-eks",
                    "name": "ECS EKS",
                    "title": "ECS EKS",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/computing/ecs-eks.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/computing/elastic-beanstalk",
                    "name": "Elastic Beanstalk",
                    "title": "Elastic Beanstalk",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/computing/elastic-beanstalk.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/computing/lambda",
                    "name": "Lambda",
                    "title": "Lambda",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/computing/lambda.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/databases",
                "name": "Databases",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/databases/aurora",
                    "name": "Aurora",
                    "title": "Aurora",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/databases/aurora.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/databases/dynamodb",
                    "name": "DynamoDB",
                    "title": "DynamoDB",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/databases/dynamodb.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/databases/rds",
                    "name": "RDS",
                    "title": "RDS",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/databases/rds.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/databases/redshift",
                    "name": "Redshift",
                    "title": "Redshift",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/databases/redshift.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/devops-integration",
                "name": "Devops Integration",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/devops-integration/codebuild",
                    "name": "CodeBuild",
                    "title": "CodeBuild",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/devops-integration/codebuild.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/devops-integration/codedeploy",
                    "name": "CodeDeploy",
                    "title": "CodeDeploy",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/devops-integration/codedeploy.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/devops-integration/codepipeline",
                    "name": "CodePipeline",
                    "title": "CodePipeline",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/devops-integration/codepipeline.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/monitoring",
                "name": "Monitoring",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/monitoring/cloudtrail",
                    "name": "CloudTrail",
                    "title": "CloudTrail",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/monitoring/cloudtrail.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/monitoring/cloudwatch",
                    "name": "CloudWatch",
                    "title": "CloudWatch",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/monitoring/cloudwatch.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/monitoring/config",
                    "name": "Config",
                    "title": "Config",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/monitoring/config.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/network",
                "name": "Network",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/network/api-gateway",
                    "name": "API Gateway",
                    "title": "API Gateway",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/network/api-gateway.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/network/cloudfront",
                    "name": "CloudFront",
                    "title": "CloudFront",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/network/cloudfront.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/network/route53",
                    "name": "Route53",
                    "title": "Route53",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/network/route53.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/network/vpc",
                    "name": "VPC",
                    "title": "VPC",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/network/vpc.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/security",
                "name": "Security",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/security/iam",
                    "name": "IAM",
                    "title": "IAM",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/security/iam.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/security/kms",
                    "name": "KMS",
                    "title": "KMS",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/security/kms.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/security/security-groups",
                    "name": "Security Groups",
                    "title": "Security Groups",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/security/security-groups.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/security/waf-shield",
                    "name": "WAF Shield",
                    "title": "WAF Shield",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/security/waf-shield.md"
                  }
                ]
              },
              {
                "type": "folder",
                "id": "04-devops-cloud/02-cloud-providers/aws/storage",
                "name": "Storage",
                "order": 10000,
                "children": [
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/storage/ebs",
                    "name": "EBS",
                    "title": "EBS",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/storage/ebs.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/storage/efs",
                    "name": "EFS",
                    "title": "EFS",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/storage/efs.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/storage/glacier",
                    "name": "Glacier",
                    "title": "Glacier",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/storage/glacier.md"
                  },
                  {
                    "type": "note",
                    "id": "04-devops-cloud/02-cloud-providers/aws/storage/s3",
                    "name": "S3",
                    "title": "S3",
                    "order": 10000,
                    "contentSrc": "/notes/04-devops-cloud/02-cloud-providers/aws/storage/s3.md"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "id": "04-devops-cloud/03-ci-cd-tools",
        "name": "CI CD Tools",
        "order": 3,
        "children": [
          {
            "type": "note",
            "id": "04-devops-cloud/03-ci-cd-tools/00-ci-cd-fundamentals",
            "name": "CI CD Fundamentals",
            "title": "CI CD Fundamentals",
            "order": 0,
            "contentSrc": "/notes/04-devops-cloud/03-ci-cd-tools/00-ci-cd-fundamentals.md"
          },
          {
            "type": "note",
            "id": "04-devops-cloud/03-ci-cd-tools/git",
            "name": "Git",
            "title": "Git",
            "order": 10000,
            "contentSrc": "/notes/04-devops-cloud/03-ci-cd-tools/git.md"
          },
          {
            "type": "note",
            "id": "04-devops-cloud/03-ci-cd-tools/github-actions",
            "name": "Github Actions",
            "title": "Github Actions",
            "order": 10000,
            "contentSrc": "/notes/04-devops-cloud/03-ci-cd-tools/github-actions.md"
          },
          {
            "type": "note",
            "id": "04-devops-cloud/03-ci-cd-tools/linux-commands",
            "name": "Linux Commands",
            "title": "Linux Commands",
            "order": 10000,
            "contentSrc": "/notes/04-devops-cloud/03-ci-cd-tools/linux-commands.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "04-devops-cloud/04-observability",
        "name": "Observability",
        "order": 4,
        "children": [
          {
            "type": "folder",
            "id": "04-devops-cloud/04-observability/elk",
            "name": "ELK",
            "order": 10000,
            "children": []
          },
          {
            "type": "folder",
            "id": "04-devops-cloud/04-observability/grafana",
            "name": "Grafana",
            "order": 10000,
            "children": [
              {
                "type": "note",
                "id": "04-devops-cloud/04-observability/grafana/notes",
                "name": "Notes",
                "title": "Notes",
                "order": 10000,
                "contentSrc": "/notes/04-devops-cloud/04-observability/grafana/notes.md"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "folder",
    "id": "05-databases",
    "name": "Databases",
    "order": 5,
    "children": [
      {
        "type": "note",
        "id": "05-databases/00-database-moc",
        "name": "Database MOC",
        "title": "Database MOC",
        "order": 0,
        "contentSrc": "/notes/05-databases/00-database-moc.md"
      },
      {
        "type": "folder",
        "id": "05-databases/01-foundations",
        "name": "Foundations",
        "order": 1,
        "children": [
          {
            "type": "note",
            "id": "05-databases/01-foundations/01-what-is-a-db-history",
            "name": "What is a DB History",
            "title": "What is a DB History",
            "order": 1,
            "contentSrc": "/notes/05-databases/01-foundations/01-what-is-a-db-history.md"
          },
          {
            "type": "note",
            "id": "05-databases/01-foundations/02-sql-vs-nosql",
            "name": "SQL vs NoSQL",
            "title": "SQL vs NoSQL",
            "order": 2,
            "contentSrc": "/notes/05-databases/01-foundations/02-sql-vs-nosql.md"
          },
          {
            "type": "note",
            "id": "05-databases/01-foundations/04-interacting-with-data",
            "name": "Interacting With Data",
            "title": "Interacting With Data",
            "order": 4,
            "contentSrc": "/notes/05-databases/01-foundations/04-interacting-with-data.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "05-databases/02-postgresql",
        "name": "PostgreSQL",
        "order": 2,
        "children": [
          {
            "type": "note",
            "id": "05-databases/02-postgresql/01-postgres-architecture",
            "name": "Postgres Architecture",
            "title": "Postgres Architecture",
            "order": 1,
            "contentSrc": "/notes/05-databases/02-postgresql/01-postgres-architecture.md"
          },
          {
            "type": "note",
            "id": "05-databases/02-postgresql/postgresql",
            "name": "PostgreSQL",
            "title": "PostgreSQL",
            "order": 10000,
            "contentSrc": "/notes/05-databases/02-postgresql/postgresql.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "05-databases/03-redis",
        "name": "Redis",
        "order": 3,
        "children": [
          {
            "type": "note",
            "id": "05-databases/03-redis/01-redis-as-a-cache",
            "name": "Redis As A Cache",
            "title": "Redis As A Cache",
            "order": 1,
            "contentSrc": "/notes/05-databases/03-redis/01-redis-as-a-cache.md"
          },
          {
            "type": "note",
            "id": "05-databases/03-redis/redis",
            "name": "Redis",
            "title": "Redis",
            "order": 10000,
            "contentSrc": "/notes/05-databases/03-redis/redis.md"
          }
        ]
      },
      {
        "type": "folder",
        "id": "05-databases/04-mongodb",
        "name": "MongoDB",
        "order": 4,
        "children": [
          {
            "type": "note",
            "id": "05-databases/04-mongodb/01-mongo-architecture",
            "name": "Mongo Architecture",
            "title": "Mongo Architecture",
            "order": 1,
            "contentSrc": "/notes/05-databases/04-mongodb/01-mongo-architecture.md"
          },
          {
            "type": "note",
            "id": "05-databases/04-mongodb/mongodb",
            "name": "MongoDB",
            "title": "MongoDB",
            "order": 10000,
            "contentSrc": "/notes/05-databases/04-mongodb/mongodb.md"
          }
        ]
      }
    ]
  },
  {
    "type": "folder",
    "id": "07-data-science-and-ai",
    "name": "Data Science and AI",
    "order": 7,
    "children": [
      {
        "type": "folder",
        "id": "07-data-science-and-ai/pytorch",
        "name": "PyTorch",
        "order": 10000,
        "children": [
          {
            "type": "note",
            "id": "07-data-science-and-ai/pytorch/pytorch",
            "name": "PyTorch",
            "title": "PyTorch",
            "order": 10000,
            "contentSrc": "/notes/07-data-science-and-ai/pytorch/pytorch.md"
          }
        ]
      }
    ]
  }
];
