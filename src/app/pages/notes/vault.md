```bash
➜  myDevLearningVault git:(master) tree
.
├── 00_System
│   ├── Daily_Notes
│   │   └── 2026
│   │       └── 2026-04
│   │           └── 2026-04-26.md
│   ├── scripts
│   │   ├── bootstrap_docker_notes.py
│   │   ├── bootstrap_software_engineer_concepts.py
│   │   ├── normalize_tech_note_frontmatter.py
│   │   ├── sync_publish_status.py
│   │   └── vault_standardize.py
│   └── Templates
│       ├── Daily_Track
│       │   └── dairy_log.md
│       ├── Project_Management
│       │   ├── Decision and Notes Log.md
│       │   ├── Project Master Tracker.md
│       │   ├── Release Readiness Checklist.md
│       │   └── Weekly Progress Log.md
│       └── Template_Tech_Note.md
├── 01_Fundamentals
│   ├── Computer_Architecture
│   │   ├── 00_MOC.md
│   │   ├── Part_00_Overview
│   │   │   └── Computing_Overview.md
│   │   ├── Part_01_Data_Representation
│   │   │   ├── Bit.md
│   │   │   └── Byte.md
│   │   ├── Part_02_Hardware
│   │   │   ├── CPU.md
│   │   │   ├── Electronic_Circuits.md
│   │   │   └── SoC_and_GPU.md
│   │   ├── Part_03_Boot_and_Firmware
│   │   │   ├── BIOS.md
│   │   │   ├── Boot_Sequence.md
│   │   │   └── UEFI.md
│   │   └── Part_05_Storage
│   │       └── Memory_Storage_Filesystems_and_Paths.md
│   ├── Networking
│   │   ├── 00_How_the_Internet_Works.md
│   │   ├── 00_Networking_MOC.md
│   │   ├── 01_OSI_Model.md
│   │   └── Protocols
│   │       ├── 00_Protocols_MOC.md
│   │       ├── DNS.md
│   │       ├── GRPC.md
│   │       ├── HTTP.md
│   │       ├── HTTPS.md
│   │       ├── IP_Addresses_and_Protocols.md
│   │       ├── IP.md
│   │       ├── NAT.md
│   │       ├── TCP.md
│   │       ├── TLS.md
│   │       ├── UDP.md
│   │       └── WEB_RTC.md
│   ├── Operating_Systems
│   │   ├── Kernel.md
│   │   ├── Linux
│   │   │   ├── 00_Home.md
│   │   │   └── 01_Process_Management.md
│   │   ├── macOS.md
│   │   └── Operating_System_Overview.md
│   └── Software_Engineer
│       ├── 00_Software_Engineer_MOC.md
│       ├── 01_Data_Modeling_and_Schema_Design
│       │   ├── 00_MOC.md
│       │   ├── Denormalization.md
│       │   ├── Materialized_Views.md
│       │   ├── Normalization.md
│       │   ├── Schema_Evolution.md
│       │   └── Schema_Registry.md
│       ├── 02_Indexing_and_Query_Optimization
│       │   ├── 00_MOC.md
│       │   ├── B_Tree.md
│       │   ├── Bloom_Filter.md
│       │   ├── Composite_Index.md
│       │   ├── Cost_Based_Optimizer.md
│       │   ├── Covering_Index.md
│       │   ├── Indexing.md
│       │   ├── LSM_Tree.md
│       │   ├── Query_Planner.md
│       │   └── Secondary_Indexes.md
│       ├── 03_Partitioning_Sharding_and_Data_Distribution
│       │   ├── 00_MOC.md
│       │   ├── Clustering.md
│       │   ├── Consistent_Hashing.md
│       │   ├── Data_Locality.md
│       │   ├── Data_Skew.md
│       │   ├── Hash_Partitioning.md
│       │   ├── Hot_Partition.md
│       │   ├── Range_Partitioning.md
│       │   ├── Rebalancing.md
│       │   ├── Resharding.md
│       │   └── Time_Series_Partitioning.md
│       ├── 04_Replication_and_Data_Distribution
│       │   ├── 00_MOC.md
│       │   ├── Federation.md
│       │   ├── Geo_Replication.md
│       │   ├── Leader_Follower_Replication.md
│       │   ├── Logical_Replication.md
│       │   ├── Multi_Leader_Replication.md
│       │   ├── Physical_Replication.md
│       │   └── Read_Replicas.md
│       ├── 05_Distributed_Systems_Fundamentals
│       │   ├── 00_MOC.md
│       │   ├── BASE.md
│       │   ├── CAP_Theorem.md
│       │   ├── Consensus.md
│       │   ├── Quorum.md
│       │   └── Split_Brain.md
│       ├── 06_Consistency_Models
│       │   ├── 00_MOC.md
│       │   ├── ACID.md
│       │   ├── Eventual_Consistency.md
│       │   ├── MVCC.md
│       │   ├── Snapshot_Isolation.md
│       │   └── Strong_Consistency.md
│       ├── 07_Distributed_Transactions
│       │   ├── 00_MOC.md
│       │   ├── Three_Phase_Commit.md
│       │   └── Two_Phase_Commit.md
│       ├── 08_Concurrency_Control_and_Locking
│       │   ├── 00_MOC.md
│       │   ├── Deadlock.md
│       │   ├── Lock_Escalation.md
│       │   ├── Optimistic_Locking.md
│       │   └── Pessimistic_Locking.md
│       ├── 09_Transaction_Anomalies
│       │   ├── 00_MOC.md
│       │   ├── Dirty_Read.md
│       │   ├── Phantom_Read.md
│       │   ├── Read_Skew.md
│       │   └── Write_Skew.md
│       ├── 10_Storage_Engine_Internals
│       │   ├── 00_MOC.md
│       │   ├── Checkpointing.md
│       │   ├── Columnar_Storage.md
│       │   ├── Compaction.md
│       │   ├── Row_Based_Storage.md
│       │   └── Write_Ahead_Logging.md
│       ├── 11_Scalability_and_Performance
│       │   ├── 00_MOC.md
│       │   ├── Backpressure.md
│       │   ├── Caching.md
│       │   ├── Connection_Pooling.md
│       │   ├── Horizontal_Scaling.md
│       │   ├── Load_Balancing.md
│       │   └── Vertical_Scaling.md
│       ├── 12_Resilience_Reliability_and_Availability
│       │   ├── 00_MOC.md
│       │   ├── Circuit_Breaker.md
│       │   ├── Failover.md
│       │   ├── High_Availability.md
│       │   ├── Rate_Limiting.md
│       │   └── Throttling.md
│       ├── 13_Data_Integration_and_Change_Propagation
│       │   ├── 00_MOC.md
│       │   ├── Change_Data_Capture.md
│       │   ├── Data_Migration.md
│       │   ├── Exactly_Once_Semantics.md
│       │   └── Idempotency.md
│       ├── 14_Analytics_and_Data_Platforms
│       │   ├── 00_MOC.md
│       │   ├── Data_Lake.md
│       │   └── Data_Warehouse.md
│       └── CONCEPT.md
├── 02_Languages
│   ├── CSharp
│   │   ├── 00_CSharp_MOC.md
│   │   ├── 01_Language_Fundamentals
│   │   │   ├── 01_Types_and_Variables.md
│   │   │   ├── 02_Control_Flow_and_Loops.md
│   │   │   ├── 03_Methods_and_Parameters.md
│   │   │   └── 04_Nullability_and_Types.md
│   │   ├── 02_OOP_and_Classes
│   │   │   ├── 01_Classes_and_Objects.md
│   │   │   ├── 02_Properties_and_Encapsulation.md
│   │   │   ├── 03_Inheritance_and_Polymorphism.md
│   │   │   └── 04_Interfaces_and_Abstract_Classes.md
│   │   ├── 03_Collections_and_LINQ
│   │   │   ├── 01_Arrays_and_Lists.md
│   │   │   ├── 02_Dictionaries_and_Sets.md
│   │   │   └── 03_LINQ_Basics.md
│   │   └── 04_Ecosystem_Basics
│   │       ├── 01_Exception_Handling.md
│   │       ├── 02_Namespaces_and_Projects.md
│   │       └── 03_DotNet_CLI_Essentials.md
│   ├── Go
│   │   ├── 00_Go_MOC.md
│   │   ├── 01_Language_Specification
│   │   │   ├── 01_Pointers_and_Memory.md
│   │   │   ├── 02_Structs_and_Composition.md
│   │   │   ├── 03_Slices_and_Arrays_Internals.md
│   │   │   └── 04_Implicit_Interfaces.md
│   │   ├── 02_Concurrency_Primitives
│   │   │   ├── 01_Goroutines_vs_Threads.md
│   │   │   ├── 02_Channels_and_Buffering.md
│   │   │   ├── 03_The_Select_Statement.md
│   │   │   └── 04_Sync_Package_and_Mutex.md
│   │   ├── 03_Runtime_and_Internals
│   │   │   ├── 01_The_Go_Scheduler_GMP.md
│   │   │   ├── 02_Memory_Alloc_Escape_Analysis.md
│   │   │   └── 03_Garbage_Collector_Tuning.md
│   │   └── 04_Ecosystem_and_Gin
│   │       ├── 01_Error_Handling_Idiomatic.md
│   │       ├── 02_Go_Modules_and_Tooling.md
│   │       └── 03_Gin_Framework_Architecture.md
│   ├── Java
│   │   ├── 00_Java_MOC.md
│   │   ├── 00_Overview
│   │   │   ├── Java_Best_Practices.md
│   │   │   ├── Java_JVM_Internals.md
│   │   │   ├── Java_Overview.md
│   │   │   └── Java_Practical_Examples.md
│   │   ├── 01_Fundamentals
│   │   │   ├── Arrays.md
│   │   │   ├── Basic_IO.md
│   │   │   ├── Control_Structures.md
│   │   │   ├── Data_Types.md
│   │   │   ├── Operators.md
│   │   │   ├── Strings_StringBuilder.md
│   │   │   └── Variables_Constants.md
│   │   ├── 02_OOP
│   │   │   ├── Abstract_Interfaces.md
│   │   │   ├── Classes_Objects.md
│   │   │   ├── Constructors.md
│   │   │   ├── Encapsulation.md
│   │   │   ├── Inheritance.md
│   │   │   ├── Inner_Classes.md
│   │   │   ├── Polymorphism.md
│   │   │   └── Records_Java_14+.md
│   │   ├── 03_Collections_Generics
│   │   │   ├── Collections_Framework.md
│   │   │   ├── Comparable_Comparator.md
│   │   │   ├── Generics.md
│   │   │   ├── List_ArrayList_LinkedList.md
│   │   │   ├── Map_HashMap_TreeMap.md
│   │   │   ├── Queue_Deque.md
│   │   │   ├── Set_HashSet_TreeSet.md
│   │   │   └── Streams_API.md
│   │   ├── 04_Core_Libraries
│   │   │   ├── java_io.md
│   │   │   ├── java_lang_Math.md
│   │   │   ├── java_lang_String.md
│   │   │   ├── java_lang_System.md
│   │   │   ├── java_nio.md
│   │   │   ├── java_util_Date_Time.md
│   │   │   ├── java_util_logging.md
│   │   │   ├── java_util_Optional.md
│   │   │   └── java_util_regex.md
│   │   ├── 05_Error_Handling
│   │   │   ├── Checked_vs_Unchecked.md
│   │   │   ├── Custom_Exceptions.md
│   │   │   ├── Exceptions.md
│   │   │   ├── Try_Catch_Finally.md
│   │   │   └── Try_with_Resources.md
│   │   ├── 06_Concurrency
│   │   │   ├── Atomic_Classes.md
│   │   │   ├── Basic_Threads.md
│   │   │   ├── Executor_Framework.md
│   │   │   ├── Future_CompletableFuture.md
│   │   │   ├── Locks.md
│   │   │   └── Synchronization.md
│   │   ├── 07_Modern_Java
│   │   │   ├── DateTime_API.md
│   │   │   ├── Default_Methods.md
│   │   │   ├── Lambdas.md
│   │   │   ├── Method_References.md
│   │   │   ├── Optional_Deep.md
│   │   │   ├── Records_Java_14.md
│   │   │   ├── Sealed_Classes_Java_17.md
│   │   │   ├── Switch_Expressions_Java_14.md
│   │   │   ├── Text_Blocks_Java_13.md
│   │   │   ├── Var_Java_10.md
│   │   │   └── Virtual_Threads_Java_21.md
│   │   ├── 09_Tools
│   │   │   ├── Gradle.md
│   │   │   ├── JUnit.md
│   │   │   ├── Log4j_SLF4J.md
│   │   │   ├── Lombok.md
│   │   │   ├── MapStruct.md
│   │   │   └── Maven.md
│   │   └── Appendices
│   │       ├── Code_Conventions.md
│   │       ├── Common_Annotations.md
│   │       ├── Design_Patterns_Java.md
│   │       ├── JVM_Commands.md
│   │       └── Useful_Methods.md
│   ├── JavaScript
│   │   ├── 00_JS_TS_MOC.md
│   │   ├── 01_JavaScript_Fundamentals
│   │   │   ├── 01_Variables_and_Data_Types.md
│   │   │   ├── 02_Functions_and_Scope.md
│   │   │   ├── 03_Objects_and_Arrays.md
│   │   │   └── 04_Control_Flow_and_Error_Handling.md
│   │   ├── 02_Asynchronous_JavaScript
│   │   │   ├── 01_Callbacks_and_Promises.md
│   │   │   ├── 02_Async_Await.md
│   │   │   └── 03_Event_Loop_Basics.md
│   │   └── 03_TypeScript_Fundamentals
│   │       ├── 01_Basic_Types_and_Interfaces.md
│   │       ├── 02_Unions_Generics_and_Type_Narrowing.md
│   │       └── 03_TS_Config_and_Tooling.md
│   └── Python
│       ├── 00_Overview
│       │   └── Overview.md
│       ├── 00_PY_MOC.md
│       ├── 01_Fundamentals
│       │   ├── Control_Flow.md
│       │   ├── Data_Types.md
│       │   ├── Functions.md
│       │   ├── Operators.md
│       │   ├── Strings.md
│       │   └── Variables_Constants.md
│       ├── 02_Python_Object_Model
│       │   ├── Dunder_Methods.md
│       │   ├── Everything_Is_Object.md
│       │   ├── Mutability.md
│       │   ├── Namespaces.md
│       │   └── Types_Classes.md
│       ├── 03_OOP
│       │   ├── Abstract_Base_Classes.md
│       │   ├── Classes.md
│       │   ├── Descriptors.md
│       │   ├── Encapsulation.md
│       │   ├── Inheritance.md
│       │   ├── MRO.md
│       │   └── Polymorphism.md

│       ├── 04_Collections
│       │   ├── Collections_Module.md
│       │   ├── Deque.md
│       │   ├── Dictionaries.md
│       │   ├── Lists.md
│       │   ├── Sets.md
│       │   └── Tuples.md
│       ├── 05_Functional_Programming
│       │   ├── Any_All_zip.md
│       │   ├── functools.md
│       │   ├── Generator_Expressions.md
│       │   ├── List_Comprehension.md
│       │   ├── Map_Reduce_Filter.md
│       │   └── sorted.md
│       ├── 06_Advanced_Data_Types
│       │   ├── Booleans.md
│       │   ├── Bytes_Bytearray.md
│       │   ├── Dataclasses.md
│       │   ├── Enums.md
│       │   └── Numbers.md
│       ├── 07_Error_Handling
│       │   ├── Custom_Exceptions.md
│       │   ├── Exceptions.md
│       │   └── Raise_Try_Except.md
│       ├── 08_Modules_Packages
│       │   ├── Import_System.md
│       │   ├── Packages.md
│       │   ├── PIP_VirtualEnv.md
│       │   └── Standard_Library.md
│       └── Appendices
│           ├── Built-in_Functions.md
│           ├── Common_Patterns.md
│           ├── Python_VM.md
│           └── Style_Guide.md
├── 03_Backend
│   ├── 00_Introduction
│   │   ├── 01_Welcome_to_the_Machine.md
│   │   ├── 02_The_Backend_Glosary.md
│   │   ├── 03_History_and_Evolution.md
│   │   └── 04_The_Perfect_API_Design.md
│   ├── 00_MOC.md
│   ├── 01_Frameworks
│   │   ├── Django
│   │   │   ├── 00_Django_MOC.md
│   │   │   ├── 01_Core_Foundations
│   │   │   │   ├── 01_Project_vs_App_Structure.md
│   │   │   │   ├── 02_The_MVT_Pattern.md
│   │   │   │   └── 03_Django_CLI_and_Manage.md
│   │   │   ├── 02_Data_and_ORM
│   │   │   │   ├── 01_Model_Definitions_Fields.md
│   │   │   │   ├── 02_Database_Migrations.md
│   │   │   │   ├── 03_QuerySets_and_Managers.md
│   │   │   │   └── 04_Advanced_ORM_Optimization.md
│   │   │   ├── 03_Views_and_Routing
│   │   │   │   ├── 01_URL_Routing_and_Resolvers.md
│   │   │   │   ├── 02_Function_Based_Views.md
│   │   │   │   ├── 03_Class_Based_Views.md
│   │   │   │   └── 04_Middleware_Chain.md
│   │   │   ├── 04_Django_REST_Framework
│   │   │   │   ├── 01_DRF_Architecture_Overview.md
│   │   │   │   ├── 02_Serializers_Deep_Dive.md
│   │   │   │   ├── 03_API_Views_and_ViewSets.md
│   │   │   │   └── 04_Authentication_Permissions.md
│   │   │   └── 05_Advanced_and_Ecosystem
│   │   │       ├── 01_Django_Signals.md
│   │   │       ├── 02_Security_Best_Practices.md
│   │   │       └── 03_Async_Django_and_Channels.md
│   │   ├── FastAPI
│   │   │   ├── 00_FastAPI_MOC.md
│   │   │   ├── 01_Core_and_Routing
│   │   │   │   ├── 01_ASGI_vs_WSGI.md
│   │   │   │   ├── 02_Declaring_Endpoints.md
│   │   │   │   └── 03_The_Dependency_Injection.md
│   │   │   ├── 02_Data_Validation_Pydantic
│   │   │   │   ├── 01_Pydantic_V2_Foundations.md
│   │   │   │   ├── 02_Data_Shaping_Schemas.md
│   │   │   │   └── 03_Custom_Validators.md
│   │   │   ├── 03_Database_and_External_ORMs
│   │   │   │   ├── 01_Decoupling_The_ORM.md
│   │   │   │   ├── 02_Async_Database_Sessions.md
│   │   │   │   └── 03_Migrations_with_Alembic.md
│   │   │   └── 04_Concurrency_and_Advanced
│   │   │       ├── 01_Async_Await_Deep_Dive.md
│   │   │       ├── 02_Background_Tasks.md
│   │   │       └── 03_Global_Error_Handling.md
│   │   └── Spring_Boot
│   │       ├── 00_Spring_MOC.md
│   │       ├── 01_Core_and_Internals
│   │       │   ├── 01_Spring_Core_and_IoC.md
│   │       │   └── 02_Autoconfiguration_Lifecycle.md
│   │       ├── 02_Configuration_and_Environments
│   │       │   └── 01_Properties_Profiles_and_YAML.md
│   │       ├── 03_Data_and_Persistence
│   │       │   ├── 01_JPA_Hibernate_and_Data_JDBC.md
│   │       │   └── 02_Transaction_Management.md
│   │       ├── 04_Web_and_API_Layer
│   │       │   ├── 01_REST_Controllers_and_MVC.md
│   │       │   └── 02_Global_Exception_Handling.md
│   │       ├── 05_Security_and_Identity
│   │       │   └── 01_Spring_Security_Architecture.md
│   │       └── 06_Testing_and_Observability
│   │           ├── 01_Testing_Slice_Annotations.md
│   │           └── 02_Actuator_and_Metrics.md
│   ├── 02_Architecture_Patterns
│   │   ├── 01_Monoliths_vs_Microservices.md
│   │   ├── 02_Modular_Monoliths.md
│   │   └── 03_Clean_Architecture.md
│   ├── 03_Communication_Patterns
│   │   ├── 01_Sync_vs_Async.md
│   │   ├── 02_gRPC_Deep_Dive.md
│   │   └── 03_Serialization_Protocols.md
│   ├── 05_Messaging_and_Events
│   │   └── 02_Kafka
│   │       └── learning
│   │           ├── 01-foundations
│   │           │   ├── 01-what-is-kafka.md
│   │           │   ├── 02-core-concepts.md
│   │           │   ├── 03-producers-consumers.md
│   │           │   ├── 04-topics-partitions-offsets.md
│   │           │   └── 05-brokers-clusters.md
│   │           ├── 02-architecture
│   │           │   ├── 01-replication-and-acks.md
│   │           │   ├── 02-consumer-groups.md
│   │           │   ├── 03-partition-rebalancing.md
│   │           │   ├── 04-zookeeper-kraft.md
│   │           │   └── 05-log-compaction.md
│   │           └── 03-production-patterns
│   │               ├── 01-message-ordering-guarantees.md
│   │               ├── 02-idempotent-producers.md
│   │               ├── 03-transactions.md
│   │               ├── 04-dead-letter-queues.md
│   │               └── 05-schema-registry-avro.md
│   ├── 06_Observability_and_Security
│   │   ├── 01_The_Three_Pillars.md
│   │   ├── 02_Authentication_AuthZ.md
│   │   └── 03_Rate_Limiting_CORS.md
│   └── 07_Backend_Comunication_Patterns
├── 04_DevOps_Cloud
│   ├── 00_MOC.md
│   ├── 01_Containers
│   │   ├── Docker
│   │   │   ├── 00_Docker_MOC.md
│   │   │   ├── 01_Fundamentals
│   │   │   │   ├── 01_What_Is_Docker.md
│   │   │   │   ├── 02_Containers_vs_Virtual_Machines.md
│   │   │   │   ├── 03_Docker_Architecture_Engine_Daemon_Client.md
│   │   │   │   └── 04_Docker_Objects_Overview.md
│   │   │   ├── 02_Images
│   │   │   │   ├── 01_Images_vs_Containers.md
│   │   │   │   ├── 02_Image_Layers_and_Caching.md
│   │   │   │   ├── 03_Tags_and_Digests.md
│   │   │   │   └── 04_Multi_Stage_Builds.md
│   │   │   ├── 03_Dockerfile
│   │   │   │   ├── 01_Dockerfile_Syntax_and_Instructions.md
│   │   │   │   ├── 02_ENTRYPOINT_vs_CMD.md
│   │   │   │   ├── 03_ENV_ARG_and_Build_Args.md
│   │   │   │   ├── 04_COPY_vs_ADD.md
│   │   │   │   └── 05_Dockerfile_Best_Practices.md
│   │   │   ├── 04_Containers_and_Lifecycle
│   │   │   │   ├── 01_Container_Lifecycle_States.md
│   │   │   │   ├── 02_Container_Networking_Modes.md
│   │   │   │   ├── 03_Restart_Policies.md
│   │   │   │   └── 04_Resource_Limits_CPU_Memory.md
│   │   │   ├── 05_CLI_Commands
│   │   │   │   ├── 01_Image_Commands_build_pull_push_rmi.md
│   │   │   │   ├── 02_Container_Commands_run_ps_stop_rm.md
│   │   │   │   ├── 03_Inspecting_Commands_logs_exec_inspect_top.md
│   │   │   │   ├── 04_System_Commands_system_prune_stats.md
│   │   │   │   └── 05_Docker_CLI_Cheatsheet.md
│   │   │   ├── 06_Volumes_and_Storage
│   │   │   │   ├── 01_Volumes_Overview.md
│   │   │   │   ├── 02_Named_Volumes.md
│   │   │   │   ├── 03_Anonymous_Volumes.md
│   │   │   │   ├── 04_Bind_Mounts.md
│   │   │   │   ├── 05_tmpfs_Mounts.md
│   │   │   │   └── 06_Volume_Drivers_and_Backup.md
│   │   │   ├── 07_Networking
│   │   │   │   ├── 01_Docker_Network_Drivers.md
│   │   │   │   ├── 02_Bridge_Network.md
│   │   │   │   ├── 03_Host_Network.md
│   │   │   │   ├── 04_Overlay_Network.md
│   │   │   │   ├── 05_Custom_Networks_and_DNS.md
│   │   │   │   └── 06_Port_Mapping.md
│   │   │   ├── 08_Docker_Compose
│   │   │   │   ├── 01_Compose_File_Structure.md
│   │   │   │   ├── 02_Services_Networks_Volumes.md
│   │   │   │   ├── 03_Environment_Variables_and_env_files.md
│   │   │   │   ├── 04_Compose_CLI_Commands.md
│   │   │   │   └── 05_Multi_Container_App_Example.md
│   │   │   ├── 09_Registries_and_Distribution
│   │   │   │   ├── 01_Docker_Hub.md
│   │   │   │   ├── 02_Private_Registries.md
│   │   │   │   └── 03_Image_Publishing_Workflow.md
│   │   │   ├── 10_Security
│   │   │   │   ├── 01_Running_as_Non_Root.md
│   │   │   │   ├── 02_Image_Scanning.md
│   │   │   │   └── 03_Secrets_Management.md
│   │   │   ├── 11_Ecosystem_and_Advanced
│   │   │   │   ├── 01_Docker_Swarm_Overview.md
│   │   │   │   ├── 02_Docker_in_CI_CD.md
│   │   │   │   └── 03_Docker_vs_Podman.md
│   │   │   ├── Docker Engine.md
│   │   │   └── Overview.md
│   │   ├── Kubernetes
│   │   │   ├── 00_K8s_MOC.md
│   │   │   ├── 01_Architecture_and_Cluster
│   │   │   │   ├── 01_Control_Plane_Components.md
│   │   │   │   ├── 02_Worker_Nodes_Anatomy.md
│   │   │   │   └── 03_Declarative_Vs_Imperative.md
│   │   │   ├── 02_Workloads_and_Compute
│   │   │   │   ├── 01_Pods_Lifecycle.md
│   │   │   │   ├── 02_ReplicaSets.md
│   │   │   │   ├── 03_Deployments.md
│   │   │   │   └── 04_StatefulSets_and_Jobs.md
│   │   │   ├── 03_Networking_and_Services
│   │   │   │   ├── 01_ClusterIP_NodePort_LB.md
│   │   │   │   ├── 02_Ingress_Controllers.md
│   │   │   │   └── 03_Pod_Networking_CNI.md
│   │   │   ├── 04_Configuration_and_Storage
│   │   │   │   ├── 01_ConfigMaps_and_Secrets.md
│   │   │   │   ├── 02_Volumes_and_Mounts.md
│   │   │   │   └── 03_Persistent_Volumes_PV_PVC.md
│   │   │   └── 05_Advanced_Ops
│   │   │       ├── 01_Probes_Healthchecks.md
│   │   │       ├── 02_Resource_Management.md
│   │   │       └── 03_Namespaces_and_RBAC.md
│   │   └── Virtual_Machines.md
│   ├── 02_Cloud_Providers
│   │   ├── 00_Overview.md
│   │   ├── 01_Service_Models.md
│   │   ├── 02_Deploy_Models.md
│   │   ├── 03_Providers.md
│   │   └── AWS
│   │       ├── 00_Overview.md
│   │       ├── 01_Certifications.md
│   │       ├── Computing
│   │       │   ├── EC2.md
│   │       │   ├── ECS_EKS.md
│   │       │   ├── Elastic_Beanstalk.md
│   │       │   └── Lambda.md
│   │       ├── Databases
│   │       │   ├── Aurora.md
│   │       │   ├── DynamoDB.md
│   │       │   ├── RDS.md
│   │       │   └── Redshift.md
│   │       ├── Devops_Integration
│   │       │   ├── CodeBuild.md
│   │       │   ├── CodeDeploy.md
│   │       │   └── CodePipeline.md
│   │       ├── Monitoring
│   │       │   ├── CloudTrail.md
│   │       │   ├── CloudWatch.md
│   │       │   └── Config.md
│   │       ├── Network
│   │       │   ├── API_Gateway.md
│   │       │   ├── CloudFront.md
│   │       │   ├── Route53.md
│   │       │   └── VPC.md
│   │       ├── Security
│   │       │   ├── IAM.md
│   │       │   ├── KMS.md
│   │       │   ├── Security_Groups.md
│   │       │   └── WAF_Shield.md
│   │       └── Storage
│   │           ├── EBS.md
│   │           ├── EFS.md
│   │           ├── Glacier.md
│   │           └── S3.md
│   ├── 03_CI_CD_Tools
│   │   ├── 00_CI_CD_Fundamentals.md
│   │   ├── Git.md
│   │   ├── Github_Actions.md
│   │   └── Linux_Commands.md
│   └── 04_Observability
│       ├── ELK
│       └── Grafana
│           └── Notes.md
├── 05_Databases
│   ├── 00_Database_MOC.md
│   ├── 01_Foundations
│   │   ├── 01_What_is_a_DB_History.md
│   │   ├── 02_SQL_vs_NoSQL.md
│   │   └── 04_Interacting_With_Data.md
│   ├── 02_PostgreSQL
│   │   ├── 01_Postgres_Architecture.md
│   │   └── PostgreSQL.md
│   ├── 03_Redis
│   │   ├── 01_Redis_As_A_Cache.md
│   │   └── Redis.md
│   └── 04_MongoDB
│       ├── 01_Mongo_Architecture.md
│       └── MongoDB.md
├── 07_Data_Science_and_AI
│   └── PyTorch
│       └── PyTorch.md
├── 2026-06-18.md
├── Template_Tech_Note.md
└── Untitled.canvas

143 directories, 484 files
➜  myDevLearningVault git:(master)

```
