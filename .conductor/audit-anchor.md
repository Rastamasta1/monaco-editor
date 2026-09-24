# Atrytone audit-chain anchor

Atrytone keeps an append-only, hash-chained audit log of every governed
action it takes. This file publishes that chain's head into this
repository — somewhere Atrytone does not control — so that the record can
be checked by someone who does not have to take Atrytone's word for it.

It is written by Atrytone's broker, not by the agent that produced the
change in this push. The agent cannot omit it, and cannot write it: the
path is reserved, and a push whose payload contains it is refused.

## The anchor

```
chain head sequence      47635
chain head hash          90d18807ad151da7386f9bc08bc6ef55702c9dbe67e5f59c6c08fee74bc8fc29
head row written at      2026-09-24T15:41:08.036Z
chain genesis at         2026-06-26T10:52:06.958Z
published at             2026-09-24T15:41:13.052Z
published into           Rastamasta1/monaco-editor
carried by intent        c5932794-f201-4a80-9cc0-35c98056e603
cockpit build            c0ebdc2e
```

## The previous anchor, so a gap is visible

**This is the first anchor published into this repository.** Nothing
before it is anchored here. Later anchors will name this one, so any
gap after this point is visible in this file's git history.

## What this proves

- Every audit row up to sequence 47635 hashes, in order, to the head
  hash above. Each row's hash covers the previous row's hash, so the
  sequence cannot be reordered, and no row can be removed from the middle
  without the following hashes disagreeing.
- This file is committed to this repository, so the hash above existed at
  this commit's date — a date recorded in this repository's history, which
  Atrytone does not administer and cannot rewrite.
- Therefore any later edit to any audit row at or below sequence 47635
  makes Atrytone's recomputed head disagree with the hash committed here,
  and the disagreement is detectable by anyone holding this file.

## What this does NOT prove

- It says nothing about rows written BEFORE the genesis above. 2396
  rows lost their run attribution before the chain existed, and that is
  unrepairable: the identifiers are gone and nothing recorded what they were.
- It does not prove COMPLETENESS. A chain shows that nothing recorded was
  changed. It cannot show that everything that happened was recorded.
- It does not reveal or prove the CONTENT of any row. The hash commits to
  the whole ledger; reading any part of it still requires Atrytone.
- The sequence number counts audit rows across EVERY Atrytone client, not
  only this one. It therefore discloses how many audit rows exist in total,
  and nothing about whose they are.
- It anchors MOMENTS, NOT TIME. A head is published when Atrytone's broker
  pushes to this repository, and at no other time. Between two anchors
  Atrytone was running and was not anchored here. Atrytone also has a
  fallback path in which its worker pushes directly, without the broker;
  such a push carries no anchor at all. Do not read the presence of this
  file on some commits as a guarantee that every commit has one.

## How to check it

1. Note the head hash and sequence above, and this commit's date.
2. Ask Atrytone to recompute the chain over the same range. Its
   `verify_audit_chain()` walks every row in sequence order, recomputing
   each row's hash from the row's own contents and the previous hash.
3. The head it produces for sequence 47635 must equal the hash above.
   If it does not, something at or below that sequence changed after this
   commit was made.
