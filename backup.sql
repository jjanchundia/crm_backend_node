--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    idcliente integer NOT NULL,
    nombres character varying(200),
    apellidos character varying(200)
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- Name: cliente_idcliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.cliente ALTER COLUMN idcliente ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cliente_idcliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: contacto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacto (
    idcontacto integer NOT NULL,
    nombrecontacto character varying(200),
    numero character varying(20),
    idcliente integer
);


ALTER TABLE public.contacto OWNER TO postgres;

--
-- Name: contacto_idcontacto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contacto ALTER COLUMN idcontacto ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contacto_idcontacto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: proyecto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proyecto (
    idproyecto integer NOT NULL,
    nombres character varying(200),
    descripcion character varying(200)
);


ALTER TABLE public.proyecto OWNER TO postgres;

--
-- Name: proyecto_idproyecto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.proyecto ALTER COLUMN idproyecto ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.proyecto_idproyecto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: reunion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reunion (
    idreunion integer NOT NULL,
    nombre character varying(200),
    descripcion character varying(200),
    enlace character varying(200)
);


ALTER TABLE public.reunion OWNER TO postgres;

--
-- Name: reunion_cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reunion_cliente (
    idreunion_cliente integer NOT NULL,
    idreunion integer,
    idcliente integer
);


ALTER TABLE public.reunion_cliente OWNER TO postgres;

--
-- Name: reunion_cliente_idreunion_cliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.reunion_cliente ALTER COLUMN idreunion_cliente ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reunion_cliente_idreunion_cliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: reunion_idreunion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.reunion ALTER COLUMN idreunion ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reunion_idreunion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    idusuario integer NOT NULL,
    usuario character varying(200),
    clave character varying(200)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_idusuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.usuario ALTER COLUMN idusuario ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuario_idusuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (idcliente, nombres, apellidos) FROM stdin;
4	Aaron Enmanuel	Medina Mejias
7	Jose	Medina
8	Daniela	Macio
\.


--
-- Data for Name: contacto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacto (idcontacto, nombrecontacto, numero, idcliente) FROM stdin;
1	\N	\N	\N
2	\N	\N	\N
3	\N	\N	\N
4	$1	$2	1
7	\N	\N	\N
8	\N	\N	\N
9	\N	\N	\N
11	\N	\N	\N
12	\N	\N	\N
13	\N	\N	\N
14	Daniela	15151	8
5	Juan	181818	7
6	Jose	11111	4
15	Patricia	8	95959595
10	Joseq	09999999	7
16	Maira	84848484	8
\.


--
-- Data for Name: proyecto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyecto (idproyecto, nombres, descripcion) FROM stdin;
1	Dearrollo Web	Desarrollo
2	jose	4344
4	fsdf	fdsfdsfs
5	dasd	dasdsa
\.


--
-- Data for Name: reunion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reunion (idreunion, nombre, descripcion, enlace) FROM stdin;
1	dfsdf	ffdsfds	www.google.com\n
4	josesss	4344	www.google.com
5	Proyectos nuevos	21321	1231
3	Inteligencia Artificial	11	www.google.com
\.


--
-- Data for Name: reunion_cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reunion_cliente (idreunion_cliente, idreunion, idcliente) FROM stdin;
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (idusuario, usuario, clave) FROM stdin;
1	jjanchundia	123
3	fasfa	34324
23	999	999
25	jose	4344
27	jjanchundia3	123
\.


--
-- Name: cliente_idcliente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cliente_idcliente_seq', 8, true);


--
-- Name: contacto_idcontacto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacto_idcontacto_seq', 16, true);


--
-- Name: proyecto_idproyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyecto_idproyecto_seq', 5, true);


--
-- Name: reunion_cliente_idreunion_cliente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reunion_cliente_idreunion_cliente_seq', 1, false);


--
-- Name: reunion_idreunion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reunion_idreunion_seq', 5, true);


--
-- Name: usuario_idusuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_idusuario_seq', 27, true);


--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (idcliente);


--
-- Name: contacto contacto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacto
    ADD CONSTRAINT contacto_pkey PRIMARY KEY (idcontacto);


--
-- Name: proyecto proyecto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyecto
    ADD CONSTRAINT proyecto_pkey PRIMARY KEY (idproyecto);


--
-- Name: reunion_cliente reunion_cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion_cliente
    ADD CONSTRAINT reunion_cliente_pkey PRIMARY KEY (idreunion_cliente);


--
-- Name: reunion reunion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion
    ADD CONSTRAINT reunion_pkey PRIMARY KEY (idreunion);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (idusuario);


--
-- PostgreSQL database dump complete
--

