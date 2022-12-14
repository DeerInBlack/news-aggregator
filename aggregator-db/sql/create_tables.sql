create table if not exists categories
(
    id bigserial primary key,
    category varchar not null unique
);

alter table categories owner to postgres;

create table if not exists roles
(
    id bigserial primary key,
    role varchar not null unique
);

alter table roles owner to postgres;

create table if not exists users
(
    id bigserial primary key,
    email varchar not null unique,
    username varchar not null unique,
    pass      varchar              not null,
    r_id bigint not null constraint users_roles_id_fk references roles,
    is_active boolean default true not null
);

alter table users owner to postgres;

create table if not exists cu
(
    c_id bigint not null constraint cu_categories_id_fk references categories on delete cascade,
    u_id bigint not null constraint cu_users_id_fk references users on delete cascade
);

alter table cu owner to postgres;

create table if not exists languages
(
    id bigserial primary key unique,
    language varchar not null unique
);

alter table languages owner to postgres;

create table if not exists sources
(
    id bigserial primary key unique,
    source varchar not null unique
);

alter table sources owner to postgres;

create table if not exists su
(
    s_id bigint not null constraint su_sources_id_fk references sources on delete cascade,
    u_id bigint not null constraint su_users_id_fk references users on delete cascade
);

alter table su owner to postgres;

create table if not exists lu
(
    l_id bigint not null constraint lu_languages_id_fk references languages on delete cascade,
    u_id bigint not null constraint lu_users_id_fk references users on delete cascade
);

alter table lu owner to postgres;
