--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

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

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
5	5	1	2999
6	6	1	2999
7	6	3	2900
8	6	3	2900
9	6	3	2900
10	6	3	2900
11	6	3	2900
12	6	3	2900
13	6	3	2900
14	6	3	2900
15	6	3	2900
16	6	3	2900
17	6	3	2900
18	6	3	2900
19	6	3	2900
20	6	3	2900
21	6	3	2900
22	6	3	2900
23	6	3	2900
24	6	3	2900
25	6	3	2900
26	6	3	2900
27	6	3	2900
28	6	3	2900
29	6	3	2900
30	6	3	2900
31	6	1	2999
32	6	2	2595
33	6	2	2595
34	6	2	2595
35	7	2	2595
36	7	1	2999
37	8	1	2999
38	8	1	2999
39	8	3	2900
40	9	1	2999
41	10	1	2999
42	10	2	2595
43	11	5	9900
44	11	3	2900
45	12	2	2595
46	12	3	2900
47	13	3	2999
48	13	2	3499
49	14	3	2999
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-09-30 14:41:07.734342-07
2	2020-09-30 15:07:56.715521-07
3	2020-09-30 15:38:02.261806-07
4	2020-09-30 16:18:10.854845-07
5	2020-09-30 16:28:14.674098-07
6	2020-09-30 17:42:23.844808-07
7	2020-10-01 12:44:59.624805-07
8	2020-10-04 18:07:22.898126-07
9	2020-10-04 21:12:06.717998-07
10	2020-10-12 15:25:40.86089-07
11	2020-10-12 16:10:54.155908-07
12	2020-10-12 17:05:27.041964-07
13	2020-10-13 12:51:14.271952-07
14	2020-10-14 10:35:28.443075-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	9	Andrew	12341234	1234 Hello World Ave	2020-10-04 21:12:15.853546-07
2	10	22222	11111	11111	2020-10-12 16:10:35.693299-07
3	11	1111	1111	1111	2020-10-12 16:11:19.794209-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Los Angeles Lakers 2020 NBA Finals Champions Team Caricature T-Shirt - White	3499	/images/champ-white-shirt.jpg	A shirt that commemorates the 2020 NBA Champions, Los Angeles Lakers, with the team portrayed in caricature form.	In an unprecedented and often unpredictable season, the Los Angeles Lakers defeated everything and everyone in their way to become the 2020 NBA Finals Champions. Though the Los Angeles Lakers missed hearing your hollers and cheers, they'll know you supported them in the NBA Bubble when you grab this Team Caricature T-Shirt. This Fanatics Branded gear features bold, commemorative graphics that are perfect for showing your team your unwavering support.
2	Los Angeles Lakers Nike 2020 NBA Finals Champions Locker Room T-Shirt - Black	3499	/images/champ-black-shirt.jpg	The same exact shirts worn in the locker room by the 2020 NBA Champion Los Angeles Lakers!	In an unprecedented and often unpredictable season, the Los Angeles Lakers defeated everything and everyone in their way to become the 2020 NBA Finals Champions. Though the Los Angeles Lakers missed hearing your hollers and cheers, they'll know you supported them in the NBA Bubble when you grab this Locker Room T-Shirt. This Nike gear features bold, commemorative graphics that are perfect for showing your team your unwavering support.
3	Los Angeles Lakers New Era 2020 NBA Finals Champions Locker Room 9TWENTY Adjustable Hat - Black	2999	/images/champ-hat.jpg	An adjustable cap that commemorates your 2020 NBA Champion Los Angeles Lakers!	In an unprecedented and often unpredictable season, the Los Angeles Lakers defeated everything and everyone in their way to become the 2020 NBA Finals Champions. Though the Los Angeles Lakers missed hearing your hollers and cheers, they'll know you supported them in the NBA Bubble when you grab this Locker Room 9TWENTY Adjustable Hat. This New Era gear features bold, commemorative graphics that are perfect for showing your team your unwavering support.
4	Los Angeles Lakers 2020 NBA Finals Champions Face Covering	1799	/images/champ-mask.jpg	A commemorative mask themed after 2020 NBA Champions, the Los Angeles Lakers!	In an unprecedented and often unpredictable season, the Los Angeles Lakers defeated everything and everyone in their way to become the 2020 NBA Finals Champions. Though the Los Angeles Lakers missed hearing your hollers and cheers, they'll know you supported them in the NBA Bubble when you grab this Face Covering. This Fanatics Branded piece features bold, commemorative graphics that are perfect for showing your team your unwavering support.
5	Los Angeles Lakers 2020 NBA Finals Champions Locker Room Long Sleeve T-Shirt - Black	3999	/images/champ-long-shirt.jpg	A long sleeve shirt commemorating the 2020 NBA Champions, the Los Angeles Lakers!	In an unprecedented and often unpredictable season, the Los Angeles Lakers defeated everything and everyone in their way to become the 2020 NBA Finals Champions. Though the Los Angeles Lakers missed hearing your hollers and cheers, they'll know you supported them in the NBA Bubble when you grab this Locker Room Long Sleeve T-Shirt. 
6	LeBron James Los Angeles Lakers Nike 2020 NBA Finals Champions MVP T-Shirt - Black	3499	/images/champ-mvp.jpg	Celebrate LeBron James being named the 2020 NBA Finals MVP with this LeBron shirt!	In an unprecedented and often unpredictable season, the Los Angeles Lakers defeated everything and everyone in their way to become the 2020 NBA Finals Champions, with LeBron James leading the team to victory. Celebrate his huge contribution to the series with this MVP T-Shirt. 
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 49, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 14, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 3, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

