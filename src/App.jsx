import React, { useState, useRef } from "react";

const LOGO_DATA_URI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc4IiBoZWlnaHQ9IjkxIiB2aWV3Qm94PSIwIDAgMjc4IDkxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyIiB5PSIxOSIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyIiB5PSIxOSIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTM0LjEyOCAzOS42MTZMMzguNTQ0IDQwLjcwNEMzNy4yIDQ0LjY5MzMgMzUuMjggNDguMDg1MyAzMi43ODQgNTAuODhDMzAuMzA5MyA1My42NzQ3IDI3LjM0NCA1NS44ODI3IDIzLjg4OCA1Ny41MDRDMjMuNzE3MyA1Ny4xODQgMjMuNDUwNyA1Ni43ODkzIDIzLjA4OCA1Ni4zMkMyMi43NDY3IDU1LjgyOTMgMjIuMzg0IDU1LjM0OTMgMjIgNTQuODhDMjEuNjE2IDU0LjQxMDcgMjEuMjc0NyA1NC4wMjY3IDIwLjk3NiA1My43MjhDMjQuMjYxMyA1Mi40NDggMjcuMDEzMyA1MC42MjQgMjkuMjMyIDQ4LjI1NkMzMS40NTA3IDQ1Ljg4OCAzMy4wODI3IDQzLjAwOCAzNC4xMjggMzkuNjE2Wk0yMi40NDggNDguOTZMMjQuOTc2IDQ1LjgyNEMyNi4wNDI3IDQ2LjI3MiAyNy4xNzMzIDQ2Ljc4NCAyOC4zNjggNDcuMzZDMjkuNTg0IDQ3LjkxNDcgMzAuNzg5MyA0OC41MTIgMzEuOTg0IDQ5LjE1MkMzMy4yIDQ5Ljc3MDcgMzQuMzMwNyA1MC40IDM1LjM3NiA1MS4wNEMzNi40NDI3IDUxLjY4IDM3LjMzODcgNTIuMjg4IDM4LjA2NCA1Mi44NjRMMzUuMjQ4IDU2LjQ4QzM0LjU4NjcgNTUuOTA0IDMzLjc1NDcgNTUuMjg1MyAzMi43NTIgNTQuNjI0QzMxLjc0OTMgNTMuOTQxMyAzMC42NjEzIDUzLjI1ODcgMjkuNDg4IDUyLjU3NkMyOC4zMTQ3IDUxLjg5MzMgMjcuMTIgNTEuMjQyNyAyNS45MDQgNTAuNjI0QzI0LjY4OCA1MC4wMDUzIDIzLjUzNiA0OS40NTA3IDIyLjQ0OCA0OC45NlpNMjEuMTY4IDQxLjA1NkwyNC42NTYgMzkuNjE2QzI1LjE0NjcgNDAuNDI2NyAyNS42MjY3IDQxLjMyMjcgMjYuMDk2IDQyLjMwNEMyNi41ODY3IDQzLjI4NTMgMjYuOTM4NyA0NC4xMzg3IDI3LjE1MiA0NC44NjRMMjMuNDQgNDYuNDk2QzIzLjI2OTMgNDUuNzcwNyAyMi45NiA0NC44OTYgMjIuNTEyIDQzLjg3MkMyMi4wODUzIDQyLjg0OCAyMS42MzczIDQxLjkwOTMgMjEuMTY4IDQxLjA1NlpNMjYuODMyIDQwLjA5NkwzMC40OCAzOC44NDhDMzAuOTA2NyAzOS43MDEzIDMxLjMyMjcgNDAuNjQgMzEuNzI4IDQxLjY2NEMzMi4xMzMzIDQyLjY2NjcgMzIuNDEwNyA0My41NDEzIDMyLjU2IDQ0LjI4OEwyOC42ODggNDUuNjk2QzI4LjYyNCA0NS4yMDUzIDI4LjQ5NiA0NC42NCAyOC4zMDQgNDRDMjguMTEyIDQzLjM2IDI3Ljg4OCA0Mi42OTg3IDI3LjYzMiA0Mi4wMTZDMjcuMzc2IDQxLjMzMzMgMjcuMTA5MyA0MC42OTMzIDI2LjgzMiA0MC4wOTZaTTE2LjE0NCAzMy45NTJINDMuOTUyVjYyLjk3NkgzOS4wODhWMzguNEgyMC43ODRWNjIuOTc2SDE2LjE0NFYzMy45NTJaTTE4Ljg2NCA1Ny4zMTJINDAuOTEyVjYxLjc2SDE4Ljg2NFY1Ny4zMTJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzEgMzRDNzEgMTYuMzI2OSA4NS4zMjY5IDIgMTAzIDJWMkMxMjAuNjczIDIgMTM1IDE2LjMyNjkgMTM1IDM0VjM0QzEzNSA1MS42NzMxIDEyMC42NzMgNjYgMTAzIDY2VjY2Qzg1LjMyNjkgNjYgNzEgNTEuNjczMSA3MSAzNFYzNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03MSAzNEM3MSAxNi4zMjY5IDg1LjMyNjkgMiAxMDMgMlYyQzEyMC42NzMgMiAxMzUgMTYuMzI2OSAxMzUgMzRWMzRDMTM1IDUxLjY3MzEgMTIwLjY3MyA2NiAxMDMgNjZWNjZDODUuMzI2OSA2NiA3MSA1MS42NzMxIDcxIDM0VjM0WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik05MS42MDggMjcuOTI4SDEwMC4yOFYzMS4yODhIOTEuNjA4VjI3LjkyOFpNOTEuNjA4IDMzLjA0OEgxMDAuMjhWMzYuMjhIOTEuNjA4VjMzLjA0OFpNOTEuNjA4IDM4LjI5NkgxMDAuMjhWNDEuNjU2SDkxLjYwOFYzOC4yOTZaTTEwNS42MjQgMzQuODcySDExNy41OTJWMzguNzQ0SDEwNS42MjRWMzQuODcyWk05My4xNDQgMjIuNjhIOTguMDcyVjI2LjEzNkg5My4xNDRWMjIuNjhaTTEwMyAyMS4yNzJIMTE0LjU1MlYyNS4wNDhIMTAzVjIxLjI3MlpNMTAzLjI1NiA0MS4wOEgxMTguMjY0VjQ1LjA0OEgxMDMuMjU2VjQxLjA4Wk0xMDguNzYgMzIuMjE2SDExMy4xNzZWNDkuOTQ0SDEwOC43NlYzMi4yMTZaTTk0LjgwOCAyOS43Mkg5Ny44MTZWMzkuNTEySDk0LjgwOFYyOS43MlpNMTEzLjM2OCAyMS4yNzJIMTE3LjQ2NEMxMTcuNDY0IDIxLjI3MiAxMTcuNDUzIDIxLjQ1MzMgMTE3LjQzMiAyMS44MTZDMTE3LjQzMiAyMi4xNTczIDExNy40MjEgMjIuNDQ1MyAxMTcuNCAyMi42OEMxMTcuMzU3IDI0LjM0NCAxMTcuMjkzIDI1LjczMDcgMTE3LjIwOCAyNi44NEMxMTcuMTQ0IDI3Ljk0OTMgMTE3LjAzNyAyOC44MzQ3IDExNi44ODggMjkuNDk2QzExNi43MzkgMzAuMTM2IDExNi41NDcgMzAuNjA1MyAxMTYuMzEyIDMwLjkwNEMxMTYuMDM1IDMxLjI2NjcgMTE1LjcyNSAzMS41MzMzIDExNS4zODQgMzEuNzA0QzExNS4wNDMgMzEuODc0NyAxMTQuNjU5IDMyLjAwMjcgMTE0LjIzMiAzMi4wODhDMTEzLjg2OSAzMi4xNTIgMTEzLjQgMzIuMTk0NyAxMTIuODI0IDMyLjIxNkMxMTIuMjY5IDMyLjIzNzMgMTExLjY3MiAzMi4yMzczIDExMS4wMzIgMzIuMjE2QzExMS4wMTEgMzEuNjQgMTEwLjkwNCAzMSAxMTAuNzEyIDMwLjI5NkMxMTAuNTQxIDI5LjU5MiAxMTAuMzA3IDI4Ljk5NDcgMTEwLjAwOCAyOC41MDRDMTEwLjQzNSAyOC41NDY3IDExMC44MDggMjguNTc4NyAxMTEuMTI4IDI4LjZDMTExLjQ2OSAyOC42MjEzIDExMS43NDcgMjguNjMyIDExMS45NiAyOC42MzJDMTEyLjEzMSAyOC42MzIgMTEyLjI4IDI4LjYxMDcgMTEyLjQwOCAyOC41NjhDMTEyLjU1NyAyOC41MjUzIDExMi42ODUgMjguNDI5MyAxMTIuNzkyIDI4LjI4QzExMi44OTkgMjguMTMwNyAxMTIuOTg0IDI3LjgzMiAxMTMuMDQ4IDI3LjM4NEMxMTMuMTMzIDI2LjkzNiAxMTMuMTk3IDI2LjI2NCAxMTMuMjQgMjUuMzY4QzExMy4zMDQgMjQuNDcyIDExMy4zNDcgMjMuMjg4IDExMy4zNjggMjEuODE2VjIxLjI3MlpNMTA0LjUzNiAzMi40MDhMMTA4LjI0OCAzMy4xNDRDMTA3Ljk5MiAzNC41OTQ3IDEwNy42MTkgMzYuMDEzMyAxMDcuMTI4IDM3LjRDMTA2LjY1OSAzOC43ODY3IDEwNi4xMjUgMzkuOTQ5MyAxMDUuNTI4IDQwLjg4OEMxMDUuMjcyIDQwLjY5NiAxMDQuOTQxIDQwLjQ5MzMgMTA0LjUzNiA0MC4yOEMxMDQuMTMxIDQwLjA0NTMgMTAzLjcxNSAzOS44MzIgMTAzLjI4OCAzOS42NEMxMDIuODYxIDM5LjQyNjcgMTAyLjQ5OSAzOS4yNTYgMTAyLjIgMzkuMTI4QzEwMi43NzYgMzguMjk2IDEwMy4yNTYgMzcuMjgyNyAxMDMuNjQgMzYuMDg4QzEwNC4wNDUgMzQuODcyIDEwNC4zNDQgMzMuNjQ1MyAxMDQuNTM2IDMyLjQwOFpNOTEuOTkyIDE5LjYwOEw5Ni4wODggMjAuNTA0Qzk1LjcwNCAyMS45NzYgOTUuMjM0NyAyMy40MjY3IDk0LjY4IDI0Ljg1NkM5NC4xMjUzIDI2LjI4NTMgOTMuNTA2NyAyNy42MTg3IDkyLjgyNCAyOC44NTZDOTIuMTQxMyAzMC4wOTMzIDkxLjQxNiAzMS4xNzA3IDkwLjY0OCAzMi4wODhDOTAuNDEzMyAzMS44NTMzIDkwLjA5MzMgMzEuNTY1MyA4OS42ODggMzEuMjI0Qzg5LjMwNCAzMC44NjEzIDg4Ljg5ODcgMzAuNTA5MyA4OC40NzIgMzAuMTY4Qzg4LjA2NjcgMjkuODI2NyA4Ny43MDQgMjkuNTYgODcuMzg0IDI5LjM2OEM4OC40NTA3IDI4LjIxNiA4OS4zNzg3IDI2Ljc3NiA5MC4xNjggMjUuMDQ4QzkwLjk3ODcgMjMuMjk4NyA5MS41ODY3IDIxLjQ4NTMgOTEuOTkyIDE5LjYwOFpNODkuOTQ0IDI3LjkyOEg5My42MjRWMzYuNDA4QzkzLjYyNCAzNy40NTMzIDkzLjU4MTMgMzguNTg0IDkzLjQ5NiAzOS44QzkzLjQzMiA0MC45OTQ3IDkzLjMwNCA0Mi4yMTA3IDkzLjExMiA0My40NDhDOTIuOTIgNDQuNjg1MyA5Mi42MzIgNDUuODY5MyA5Mi4yNDggNDdDOTEuODg1MyA0OC4xNTIgOTEuNDA1MyA0OS4xODY3IDkwLjgwOCA1MC4xMDRDOTAuNTk0NyA0OS44OTA3IDkwLjI4NTMgNDkuNjQ1MyA4OS44OCA0OS4zNjhDODkuNDk2IDQ5LjExMiA4OS4wOTA3IDQ4Ljg1NiA4OC42NjQgNDguNkM4OC4yNTg3IDQ4LjM2NTMgODcuOTA2NyA0OC4xODQgODcuNjA4IDQ4LjA1NkM4OC4zMzMzIDQ2Ljk0NjcgODguODU2IDQ1LjcyIDg5LjE3NiA0NC4zNzZDODkuNTE3MyA0My4wMzIgODkuNzMwNyA0MS42NjY3IDg5LjgxNiA0MC4yOEM4OS45MDEzIDM4Ljg3MiA4OS45NDQgMzcuNTcwNyA4OS45NDQgMzYuMzc2VjI3LjkyOFpNOTkuMDMyIDI3LjkyOEgxMDIuODA4VjQ1Ljc1MkMxMDIuODA4IDQ2LjYwNTMgMTAyLjcxMiA0Ny4zMiAxMDIuNTIgNDcuODk2QzEwMi4zNDkgNDguNDcyIDEwMS45OTcgNDguOTMwNyAxMDEuNDY0IDQ5LjI3MkMxMDAuOTMxIDQ5LjU5MiAxMDAuMzIzIDQ5Ljc5NDcgOTkuNjQgNDkuODhDOTguOTU3MyA0OS45NjUzIDk4LjE1NzMgNTAuMDA4IDk3LjI0IDUwLjAwOEM5Ny4xNzYgNDkuNDUzMyA5Ny4wMTYgNDguNzkyIDk2Ljc2IDQ4LjAyNEM5Ni41MDQgNDcuMjU2IDk2LjIzNzMgNDYuNjE2IDk1Ljk2IDQ2LjEwNEM5Ni40OTMzIDQ2LjEyNTMgOTcuMDA1MyA0Ni4xNDY3IDk3LjQ5NiA0Ni4xNjhDOTguMDA4IDQ2LjE2OCA5OC4zNiA0Ni4xNjggOTguNTUyIDQ2LjE2OEM5OC43MjI3IDQ2LjE2OCA5OC44NCA0Ni4xMzYgOTguOTA0IDQ2LjA3MkM5OC45ODkzIDQ1Ljk4NjcgOTkuMDMyIDQ1Ljg0OCA5OS4wMzIgNDUuNjU2VjI3LjkyOFpNMTA2LjQ1NiAyMi41NTJIMTEwLjU4NEMxMTAuNDc3IDI0LjE1MiAxMTAuMjUzIDI1LjYxMzMgMTA5LjkxMiAyNi45MzZDMTA5LjU5MiAyOC4yNTg3IDEwOS4wMDUgMjkuNDQyNyAxMDguMTUyIDMwLjQ4OEMxMDcuMzIgMzEuNTEyIDEwNi4wODMgMzIuMzg2NyAxMDQuNDQgMzMuMTEyQzEwNC4yMjcgMzIuNjIxMyAxMDMuODg1IDMyLjA1NiAxMDMuNDE2IDMxLjQxNkMxMDIuOTQ3IDMwLjc1NDcgMTAyLjQ4OCAzMC4yNTMzIDEwMi4wNCAyOS45MTJDMTAzLjI5OSAyOS40IDEwNC4yMjcgMjguNzkyIDEwNC44MjQgMjguMDg4QzEwNS40MjEgMjcuMzYyNyAxMDUuODI3IDI2LjU0MTMgMTA2LjA0IDI1LjYyNEMxMDYuMjUzIDI0LjY4NTMgMTA2LjM5MiAyMy42NjEzIDEwNi40NTYgMjIuNTUyWk05Ni45ODQgMjIuNjhIOTcuODQ4TDk4LjQyNCAyMi41MkwxMDEuMDQ4IDI0LjEyQzEwMC42ODUgMjUuMTQ0IDEwMC4yMTYgMjYuMjUzMyA5OS42NCAyNy40NDhDOTkuMDg1MyAyOC42MjEzIDk4LjU1MiAyOS42MjQgOTguMDQgMzAuNDU2Qzk3LjY3NzMgMzAuMTc4NyA5Ny4yMTg3IDI5Ljg4IDk2LjY2NCAyOS41NkM5Ni4xMzA3IDI5LjIxODcgOTUuNjYxMyAyOC45NDEzIDk1LjI1NiAyOC43MjhDOTUuNDkwNyAyOC4yMTYgOTUuNzE0NyAyNy42NCA5NS45MjggMjdDOTYuMTYyNyAyNi4zNiA5Ni4zNjUzIDI1LjcyIDk2LjUzNiAyNS4wOEM5Ni43MjggMjQuNDE4NyA5Ni44NzczIDIzLjg1MzMgOTYuOTg0IDIzLjM4NFYyMi42OFoiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjE0NCIgeT0iMzkiIHdpZHRoPSIxMzIiIGhlaWdodD0iNTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE0NCIgeT0iMzkiIHdpZHRoPSIxMzIiIGhlaWdodD0iNTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTY3LjUyNCA1Mi43NEMxNjcuNzExIDUzLjA5NDcgMTY3Ljk0NCA1My41OTg3IDE2OC4yMjQgNTQuMjUyQzE2OC41MDQgNTQuODg2NyAxNjguNzkzIDU1LjU4NjcgMTY5LjA5MiA1Ni4zNTJDMTY5LjM5MSA1Ny4wOTg3IDE2OS42NzEgNTcuODI2NyAxNjkuOTMyIDU4LjUzNkMxNzAuMTkzIDU5LjI0NTMgMTcwLjM5OSA1OS44NDI3IDE3MC41NDggNjAuMzI4TDE2Ni4yNjQgNjEuODRDMTY2LjEzMyA2MS4zNzMzIDE2NS45MzcgNjAuODA0IDE2NS42NzYgNjAuMTMyQzE2NS40MzMgNTkuNDQxMyAxNjUuMTcyIDU4LjczMiAxNjQuODkyIDU4LjAwNEMxNjQuNjEyIDU3LjI1NzMgMTY0LjMyMyA1Ni41NDggMTY0LjAyNCA1NS44NzZDMTYzLjc0NCA1NS4xODUzIDE2My40OTIgNTQuNjA2NyAxNjMuMjY4IDU0LjE0TDE2Ny41MjQgNTIuNzRaTTE4MC40ODggNTUuMjMyQzE4MC4zMDEgNTUuNjQyNyAxODAuMTMzIDU2LjA3MiAxNzkuOTg0IDU2LjUyQzE3OS44NTMgNTYuOTY4IDE3OS43NDEgNTcuMzc4NyAxNzkuNjQ4IDU3Ljc1MkMxNzkuNDA1IDU4LjY4NTMgMTc5LjA2IDU5Ljc4NjcgMTc4LjYxMiA2MS4wNTZDMTc4LjE2NCA2Mi4zMDY3IDE3Ny42MzIgNjMuNTc2IDE3Ny4wMTYgNjQuODY0QzE3Ni40IDY2LjEzMzMgMTc1LjcwOSA2Ny4yODEzIDE3NC45NDQgNjguMzA4QzE3My45NTUgNjkuNjE0NyAxNzIuODUzIDcwLjggMTcxLjY0IDcxLjg2NEMxNzAuNDQ1IDcyLjkwOTMgMTY5LjE5NSA3My44MzMzIDE2Ny44ODggNzQuNjM2QzE2Ni41ODEgNzUuNDIgMTY1LjI1NiA3Ni4wNzMzIDE2My45MTIgNzYuNTk2TDE2MC4xMDQgNzIuNzZDMTYxLjM1NSA3Mi40MDUzIDE2Mi42NDMgNzEuOTEwNyAxNjMuOTY4IDcxLjI3NkMxNjUuMzEyIDcwLjYyMjcgMTY2LjYwOSA2OS44MjkzIDE2Ny44NiA2OC44OTZDMTY5LjEyOSA2Ny45NDQgMTcwLjI0IDY2Ljg3MDcgMTcxLjE5MiA2NS42NzZDMTcxLjg4MyA2NC44MTczIDE3Mi41MTcgNjMuNzM0NyAxNzMuMDk2IDYyLjQyOEMxNzMuNjc1IDYxLjEyMTMgMTc0LjE2OSA1OS43MjEzIDE3NC41OCA1OC4yMjhDMTc0Ljk5MSA1Ni43MTYgMTc1LjI3MSA1NS4yNDEzIDE3NS40MiA1My44MDRMMTgwLjQ4OCA1NS4yMzJaTTE1OS43NCA1NC41MDRDMTU5Ljk2NCA1NC45NzA3IDE2MC4yMzUgNTUuNTU4NyAxNjAuNTUyIDU2LjI2OEMxNjAuODY5IDU2Ljk1ODcgMTYxLjE4NyA1Ny42OTYgMTYxLjUwNCA1OC40OEMxNjEuODIxIDU5LjI0NTMgMTYyLjExMSA1OS45ODI3IDE2Mi4zNzIgNjAuNjkyQzE2Mi42NTIgNjEuMzgyNyAxNjIuODc2IDYxLjk3MDcgMTYzLjA0NCA2Mi40NTZMMTU4LjY3NiA2NC4wNTJDMTU4LjU0NSA2My42Nzg3IDE1OC4zNzcgNjMuMjIxMyAxNTguMTcyIDYyLjY4QzE1Ny45ODUgNjIuMTIgMTU3Ljc2MSA2MS41MzIgMTU3LjUgNjAuOTE2QzE1Ny4yNTcgNjAuMjgxMyAxNTcuMDA1IDU5LjY1NiAxNTYuNzQ0IDU5LjA0QzE1Ni40ODMgNTguNDA1MyAxNTYuMjMxIDU3LjgyNjcgMTU1Ljk4OCA1Ny4zMDRDMTU1Ljc2NCA1Ni43ODEzIDE1NS41NjggNTYuMzUyIDE1NS40IDU2LjAxNkwxNTkuNzQgNTQuNTA0Wk0yMDcuNjIgNTcuNjRDMjA3LjQzMyA1Ny45Mzg3IDIwNy4yMzcgNTguMjkzMyAyMDcuMDMyIDU4LjcwNEMyMDYuODQ1IDU5LjA5NiAyMDYuNjc3IDU5LjUwNjcgMjA2LjUyOCA1OS45MzZDMjA2LjI4NSA2MC43MDEzIDIwNS45NDkgNjEuNTk3MyAyMDUuNTIgNjIuNjI0QzIwNS4wOTEgNjMuNjUwNyAyMDQuNTU5IDY0LjcyNCAyMDMuOTI0IDY1Ljg0NEMyMDMuMjg5IDY2Ljk2NCAyMDIuNTQzIDY4LjA1NiAyMDEuNjg0IDY5LjEyQzIwMC4zMjEgNzAuNzgxMyAxOTguNzQ0IDcyLjI3NDcgMTk2Ljk1MiA3My42QzE5NS4xNiA3NC45MDY3IDE5Mi45NDggNzYuMTAxMyAxOTAuMzE2IDc3LjE4NEwxODYuMjg0IDczLjZDMTg4LjMgNzIuOTg0IDE4OS45OTkgNzIuMzEyIDE5MS4zOCA3MS41ODRDMTkyLjc4IDcwLjg1NiAxOTMuOTc1IDcwLjA5MDcgMTk0Ljk2NCA2OS4yODhDMTk1Ljk1MyA2OC40NjY3IDE5Ni44NCA2Ny42MDggMTk3LjYyNCA2Ni43MTJDMTk4LjIyMSA2Ni4wNTg3IDE5OC43NzIgNjUuMzAyNyAxOTkuMjc2IDY0LjQ0NEMxOTkuNzk5IDYzLjU4NTMgMjAwLjIzNyA2Mi43MzYgMjAwLjU5MiA2MS44OTZDMjAwLjk2NSA2MS4wMzczIDIwMS4yMDggNjAuMzA5MyAyMDEuMzIgNTkuNzEySDE5Mi40MTZMMTkzLjkyOCA1NS44NzZDMTk0LjE4OSA1NS44NzYgMTk0LjU4MSA1NS44NzYgMTk1LjEwNCA1NS44NzZDMTk1LjYyNyA1NS44NzYgMTk2LjIwNSA1NS44NzYgMTk2Ljg0IDU1Ljg3NkMxOTcuNDkzIDU1Ljg3NiAxOTguMTI4IDU1Ljg3NiAxOTguNzQ0IDU1Ljg3NkMxOTkuMzc5IDU1Ljg3NiAxOTkuOTI5IDU1Ljg3NiAyMDAuMzk2IDU1Ljg3NkMyMDAuODgxIDU1Ljg3NiAyMDEuMjE3IDU1Ljg3NiAyMDEuNDA0IDU1Ljg3NkMyMDEuODcxIDU1Ljg3NiAyMDIuMzU2IDU1Ljg0OCAyMDIuODYgNTUuNzkyQzIwMy4zODMgNTUuNzE3MyAyMDMuODIxIDU1LjYyNCAyMDQuMTc2IDU1LjUxMkwyMDcuNjIgNTcuNjRaTTE5OC42MzIgNTMuMTA0QzE5OC4yNCA1My42NjQgMTk3Ljg1NyA1NC4yNjEzIDE5Ny40ODQgNTQuODk2QzE5Ny4xMTEgNTUuNTMwNyAxOTYuODMxIDU2LjAwNjcgMTk2LjY0NCA1Ni4zMjRDMTk1Ljk3MiA1Ny41IDE5NS4xNDEgNTguNzA0IDE5NC4xNTIgNTkuOTM2QzE5My4xODEgNjEuMTQ5MyAxOTIuMTA4IDYyLjMxNiAxOTAuOTMyIDYzLjQzNkMxODkuNzU2IDY0LjUzNzMgMTg4LjU0MyA2NS41MjY3IDE4Ny4yOTIgNjYuNDA0TDE4My40ODQgNjMuNTc2QzE4NC43MTYgNjIuODEwNyAxODUuNzk5IDYyLjAzNiAxODYuNzMyIDYxLjI1MkMxODcuNjY1IDYwLjQ2OCAxODguNDY4IDU5LjY5MzMgMTg5LjE0IDU4LjkyOEMxODkuODEyIDU4LjE2MjcgMTkwLjM5MSA1Ny40MzQ3IDE5MC44NzYgNTYuNzQ0QzE5MS4zOCA1Ni4wMzQ3IDE5MS44MTkgNTUuMzkwNyAxOTIuMTkyIDU0LjgxMkMxOTIuNDUzIDU0LjQyIDE5Mi43MjQgNTMuOTA2NyAxOTMuMDA0IDUzLjI3MkMxOTMuMzAzIDUyLjYxODcgMTkzLjUyNyA1Mi4wMjEzIDE5My42NzYgNTEuNDhMMTk4LjYzMiA1My4xMDRaTTIxMi40MDggNjEuNTZDMjEyLjc4MSA2MS41Nzg3IDIxMy4yNTcgNjEuNjA2NyAyMTMuODM2IDYxLjY0NEMyMTQuNDMzIDYxLjY4MTMgMjE1LjA0IDYxLjcwOTMgMjE1LjY1NiA2MS43MjhDMjE2LjI3MiA2MS43NDY3IDIxNi44MDQgNjEuNzU2IDIxNy4yNTIgNjEuNzU2QzIxNy44MzEgNjEuNzU2IDIxOC40NzUgNjEuNzU2IDIxOS4xODQgNjEuNzU2QzIxOS45MTIgNjEuNzU2IDIyMC42NzcgNjEuNzU2IDIyMS40OCA2MS43NTZDMjIyLjI4MyA2MS43NTYgMjIzLjA5NSA2MS43NTYgMjIzLjkxNiA2MS43NTZDMjI0Ljc1NiA2MS43NTYgMjI1LjU3NyA2MS43NTYgMjI2LjM4IDYxLjc1NkMyMjcuMTgzIDYxLjc1NiAyMjcuOTQ4IDYxLjc1NiAyMjguNjc2IDYxLjc1NkMyMjkuNDA0IDYxLjc1NiAyMzAuMDU3IDYxLjc1NiAyMzAuNjM2IDYxLjc1NkMyMzEuMjMzIDYxLjc1NiAyMzEuNzI4IDYxLjc1NiAyMzIuMTIgNjEuNzU2QzIzMi43NTUgNjEuNzU2IDIzMy4zOCA2MS43MjggMjMzLjk5NiA2MS42NzJDMjM0LjYzMSA2MS42MTYgMjM1LjE1MyA2MS41Nzg3IDIzNS41NjQgNjEuNTZWNjYuOTA4QzIzNS4yMDkgNjYuODg5MyAyMzQuNjg3IDY2Ljg2MTMgMjMzLjk5NiA2Ni44MjRDMjMzLjMyNCA2Ni43NjggMjMyLjY5OSA2Ni43NCAyMzIuMTIgNjYuNzRDMjMxLjcyOCA2Ni43NCAyMzEuMjMzIDY2Ljc0IDIzMC42MzYgNjYuNzRDMjMwLjAzOSA2Ni43NCAyMjkuMzc2IDY2Ljc0IDIyOC42NDggNjYuNzRDMjI3LjkyIDY2Ljc0IDIyNy4xNTUgNjYuNzQgMjI2LjM1MiA2Ni43NEMyMjUuNTQ5IDY2Ljc0IDIyNC43MjggNjYuNzQgMjIzLjg4OCA2Ni43NEMyMjMuMDY3IDY2Ljc0IDIyMi4yNTUgNjYuNzQgMjIxLjQ1MiA2Ni43NEMyMjAuNjQ5IDY2Ljc0IDIxOS44ODQgNjYuNzQgMjE5LjE1NiA2Ni43NEMyMTguNDQ3IDY2Ljc0IDIxNy44MTIgNjYuNzQgMjE3LjI1MiA2Ni43NEMyMTYuNDQ5IDY2Ljc0IDIxNS41ODEgNjYuNzU4NyAyMTQuNjQ4IDY2Ljc5NkMyMTMuNzMzIDY2LjgzMzMgMjEyLjk4NyA2Ni44NzA3IDIxMi40MDggNjYuOTA4VjYxLjU2Wk0yNTEuNzQ4IDc0LjM1NkMyNTEuODIzIDc0LjA1NzMgMjUxLjg3OSA3My43MDI3IDI1MS45MTYgNzMuMjkyQzI1MS45NzIgNzIuODgxMyAyNTIgNzIuNDYxMyAyNTIgNzIuMDMyQzI1MiA3MS44MDggMjUyIDcxLjM5NzMgMjUyIDcwLjhDMjUyIDcwLjE4NCAyNTIgNjkuNDU2IDI1MiA2OC42MTZDMjUyIDY3Ljc1NzMgMjUyIDY2LjgzMzMgMjUyIDY1Ljg0NEMyNTIgNjQuODU0NyAyNTIgNjMuODU2IDI1MiA2Mi44NDhDMjUyIDYxLjg0IDI1MiA2MC44ODggMjUyIDU5Ljk5MkMyNTIgNTkuMDc3MyAyNTIgNTguMjY1MyAyNTIgNTcuNTU2QzI1MiA1Ni44NDY3IDI1MiA1Ni4zMTQ3IDI1MiA1NS45NkMyNTIgNTUuMjY5MyAyNTEuOTUzIDU0LjY2MjcgMjUxLjg2IDU0LjE0QzI1MS43ODUgNTMuNjE3MyAyNTEuNzQ4IDUzLjM1NiAyNTEuNzQ4IDUzLjM1NkgyNTYuNzg4QzI1Ni43ODggNTMuMzU2IDI1Ni43NTEgNTMuNjI2NyAyNTYuNjc2IDU0LjE2OEMyNTYuNjAxIDU0LjY5MDcgMjU2LjU2NCA1NS4yOTczIDI1Ni41NjQgNTUuOTg4QzI1Ni41NjQgNTYuMzQyNyAyNTYuNTY0IDU2LjgxODcgMjU2LjU2NCA1Ny40MTZDMjU2LjU2NCA1OC4wMTMzIDI1Ni41NjQgNTguNjg1MyAyNTYuNTY0IDU5LjQzMkMyNTYuNTY0IDYwLjE3ODcgMjU2LjU2NCA2MC45NjI3IDI1Ni41NjQgNjEuNzg0QzI1Ni41NjQgNjIuNjA1MyAyNTYuNTY0IDYzLjQxNzMgMjU2LjU2NCA2NC4yMkMyNTYuNTY0IDY1LjAyMjcgMjU2LjU2NCA2NS43ODggMjU2LjU2NCA2Ni41MTZDMjU2LjU2NCA2Ny4yNDQgMjU2LjU2NCA2Ny44ODggMjU2LjU2NCA2OC40NDhDMjU2LjU2NCA2OS4wMDggMjU2LjU2NCA2OS40NDY3IDI1Ni41NjQgNjkuNzY0QzI1Ny4yNzMgNjkuNDY1MyAyNTcuOTkyIDY5LjA1NDcgMjU4LjcyIDY4LjUzMkMyNTkuNDQ4IDY4LjAwOTMgMjYwLjE1NyA2Ny40MDI3IDI2MC44NDggNjYuNzEyQzI2MS41NTcgNjYuMDAyNyAyNjIuMjAxIDY1LjIzNzMgMjYyLjc4IDY0LjQxNkwyNjUuMzg0IDY4LjE2OEMyNjQuNjM3IDY5LjEyIDI2My43MTMgNzAuMDgxMyAyNjIuNjEyIDcxLjA1MkMyNjEuNTI5IDcyLjAyMjcgMjYwLjQgNzIuOTE4NyAyNTkuMjI0IDczLjc0QzI1OC4wNjcgNzQuNTQyNyAyNTYuOTY1IDc1LjIxNDcgMjU1LjkyIDc1Ljc1NkMyNTUuNTg0IDc1Ljk0MjcgMjU1LjMxMyA3Ni4xMTA3IDI1NS4xMDggNzYuMjZDMjU0LjkwMyA3Ni40MjggMjU0LjcyNSA3Ni41NjggMjU0LjU3NiA3Ni42OEwyNTEuNzQ4IDc0LjM1NlpNMjM4LjcgNzMuNzk2QzIzOS45NjkgNzIuOTE4NyAyNDAuOTc3IDcxLjg3MzMgMjQxLjcyNCA3MC42NkMyNDIuNDg5IDY5LjQ0NjcgMjQzLjA0OSA2OC4yODkzIDI0My40MDQgNjcuMTg4QzI0My42MDkgNjYuNjA5MyAyNDMuNzU5IDY1Ljg4MTMgMjQzLjg1MiA2NS4wMDRDMjQzLjk2NCA2NC4xMjY3IDI0NC4wNDggNjMuMTg0IDI0NC4xMDQgNjIuMTc2QzI0NC4xNiA2MS4xNDkzIDI0NC4xODggNjAuMTIyNyAyNDQuMTg4IDU5LjA5NkMyNDQuMjA3IDU4LjA2OTMgMjQ0LjIxNiA1Ny4xMTczIDI0NC4yMTYgNTYuMjRDMjQ0LjIxNiA1NS41ODY3IDI0NC4xODggNTUuMDM2IDI0NC4xMzIgNTQuNTg4QzI0NC4wNzYgNTQuMTQgMjQ0LjAwMSA1My43MjkzIDI0My45MDggNTMuMzU2SDI0OC44OTJDMjQ4Ljg5MiA1My4zNTYgMjQ4Ljg3MyA1My41MDUzIDI0OC44MzYgNTMuODA0QzI0OC43OTkgNTQuMDg0IDI0OC43NjEgNTQuNDM4NyAyNDguNzI0IDU0Ljg2OEMyNDguNjg3IDU1LjI5NzMgMjQ4LjY2OCA1NS43MzYgMjQ4LjY2OCA1Ni4xODRDMjQ4LjY2OCA1Ny4wNDI3IDI0OC42NTkgNTguMDIyNyAyNDguNjQgNTkuMTI0QzI0OC42MjEgNjAuMjI1MyAyNDguNTg0IDYxLjM0NTMgMjQ4LjUyOCA2Mi40ODRDMjQ4LjQ3MiA2My42MjI3IDI0OC4zODggNjQuNzA1MyAyNDguMjc2IDY1LjczMkMyNDguMTgzIDY2Ljc0IDI0OC4wNDMgNjcuNTk4NyAyNDcuODU2IDY4LjMwOEMyNDcuNDI3IDY5LjkzMiAyNDYuNzgzIDcxLjQzNDcgMjQ1LjkyNCA3Mi44MTZDMjQ1LjA4NCA3NC4xOTczIDI0NC4wNTcgNzUuNDM4NyAyNDIuODQ0IDc2LjU0TDIzOC43IDczLjc5NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01Ny45Mzc3IDQyLjcyMDNMNzEuMTI2NCAzNS4xMDU4IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEzMSA0OEwxNDQuMTg5IDU1LjYxNDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iNCIvPgo8L3N2Zz4K";

function textWidth(str, fontSize) {
  let w = 0;
  for (const ch of str) w += /[ -~]/.test(ch) ? fontSize * 0.55 : fontSize * 1.0;
  return w;
}
function maxLineWidth(str, fontSize) {
  const lines = (str || "").split("\n");
  return Math.max(0, ...lines.map((l) => textWidth(l, fontSize)));
}
function lineCount(str) {
  if (!str) return 0;
  return str.split("\n").length;
}
function minBoxWidth(node, hasIcon) {
  const fontSize = node.headingStyle ? 17 : 14;
  const subFontSize = node.headingStyle ? 13 : 12;
  const labelW = maxLineWidth(node.label || "", fontSize);
  const subW = maxLineWidth(node.sublabel || "", subFontSize);
  const iconSizeMap = { small: 16, medium: 24, large: 34 };
  const iconPad = hasIcon ? iconSizeMap[node.iconSize || "medium"] : 0;
  return Math.max(labelW, subW, iconPad) + 40;
}
// 見出し・説明文それぞれの行数分の高さを加算する。複数行になった分だけ最低高さを増やす。
// headingStyleの有無に関わらず常に大きい方(見出し大相当)の行高さで計算することで、
// 強調していない要素も強調した要素と同じ高さに揃う。
function minBoxHeightForIcon(node, hasIcon, baseH) {
  const titleLines = Math.max(1, lineCount(node.label));
  const subLines = lineCount(node.sublabel);
  const lineH = 22;
  const subLineH = 16;
  const padOuter = 18; // 枠線とコンテンツ上下の最低マージン(片側)
  const titleBlockH = titleLines * lineH;
  const subBlockH = subLines * subLineH;
  let needed = padOuter * 2 + titleBlockH + subBlockH;
  if (hasIcon) {
    const iconSizeMap = { small: 16, medium: 24, large: 34 };
    const iconSize = iconSizeMap[node.iconSize || "medium"];
    const iconGap = 6; // アイコンと見出しの間(paddingForDepthのiconGapと揃える)
    needed = padOuter * 2 + iconSize + iconGap + titleBlockH + subBlockH;
  }
  return Math.max(baseH, needed);
}
function circleDiameter(node, hasIcon) {
  const rectW = minBoxWidth(node, hasIcon);
  return Math.max(rectW * 1.25, 96);
}

function paddingForDepth(depth) {
  const base = { outer: 14, iconGap: 6, lineGap: 16 };
  const shrink = Math.pow(0.78, depth || 0);
  return {
    outer: Math.max(6, base.outer * shrink),
    iconGap: Math.max(3, base.iconGap * shrink),
    lineGap: Math.max(9, base.lineGap * shrink)
  };
}

const newId = () => `n${Math.random().toString(36).slice(2, 8)}`;

// マコさんが用意したアイコン素材(viewBox 0 0 16 16)。fill/strokeはcurrentColorに統一済みで、
// NodeIcon側で色を指定すれば自動的に反映される。
// 各アイコンはシェイプの配列として定義する。NodeIcon側でReact要素に変換して描画する。
// (以前はHTML文字列をdangerouslySetInnerHTMLでSVGのgに注入していたが、
//  SVG namespace内でのinnerHTML注入はブラウザ・タイミングによって描画が崩れることがあるため、
//  確実性を優先してReact要素を直接組み立てる方式に変更した。)
const ICON_SHAPES = {
  user: [
    { t: "circle", cx: 8, cy: 4.99, r: 2.66, stroke: true },
    { t: "path", d: "M3.76,13.67v-1.78c0-2.34,1.9-4.24,4.24-4.24h0c2.34,0,4.24,1.9,4.24,4.24v1.78", stroke: true }
  ],
  users: [
    { t: "circle", cx: 8, cy: 6.14, r: 1.87, stroke: true },
    { t: "path", d: "M5.14,12.86v-2c0-1.58,1.28-2.86,2.86-2.86h0c1.58,0,2.86,1.28,2.86,2.86v2", stroke: true },
    { t: "path", d: "M4.9,6.5c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68c.52,0,.99.24,1.29.61", stroke: true },
    { t: "path", d: "M2.32,10.32v-1.24c0-1.42,1.15-2.57,2.57-2.57h0", stroke: true },
    { t: "path", d: "M11.1,6.5c.93,0,1.68-.75,1.68-1.68s-.75-1.68-1.68-1.68c-.52,0-.99.24-1.29.61", stroke: true },
    { t: "path", d: "M13.68,10.32v-1.24c0-1.42-1.15-2.57-2.57-2.57h0", stroke: true }
  ],
  building: [
    { t: "polyline", points: "2.88 12.98 2.88 3.02 9.47 3.02 9.47 12.98", stroke: true },
    { t: "polyline", points: "10.6 5.98 13.12 5.98 13.12 12.98", stroke: true },
    { t: "line", x1: 4.67, y1: 5.21, x2: 7.69, y2: 5.21, stroke: true },
    { t: "line", x1: 4.67, y1: 7.07, x2: 7.69, y2: 7.07, stroke: true },
    { t: "line", x1: 4.67, y1: 8.92, x2: 7.69, y2: 8.92, stroke: true }
  ],
  goal: [
    { t: "polyline", points: "5.96 12 5.96 4 12.15 4 11.19 5.93 12.15 7.87 7.51 7.87", stroke: true },
    { t: "line", x1: 3.85, y1: 12, x2: 8.08, y2: 12, stroke: true }
  ],
  alert: [
    { t: "line", x1: 8, y1: 10.48, x2: 8, y2: 10.48, stroke: true },
    { t: "line", x1: 8, y1: 9.26, x2: 8, y2: 7.28, stroke: true },
    { t: "path", d: "M7.75,4.14l-4.19,7.45c-.08.14-.03.31.1.39.04.02.09.04.14.04h8.39c.15,0,.28-.12.28-.27,0-.05-.01-.1-.04-.15l-4.2-7.45c-.07-.14-.25-.19-.38-.11-.05.03-.09.06-.11.11Z", stroke: true }
  ],
  male: [
    { t: "circle", cx: 8, cy: 4.8, r: 2.66, stroke: true },
    { t: "polyline", points: "3.94 13.86 3.94 9.25 12.06 9.25 12.06 13.86", stroke: true }
  ],
  female: [
    { t: "circle", cx: 8, cy: 4.99, r: 2.66, stroke: true },
    { t: "polyline", points: "12.56 13.67 10.14 9.45 5.86 9.45 3.44 13.67", stroke: true }
  ],
  home: [
    { t: "polyline", points: "10.01 12.93 10.01 9.8 8 9.8 8 12.93", stroke: true },
    { t: "line", x1: 3.98, y1: 12.93, x2: 3.98, y2: 6.11, stroke: true },
    { t: "line", x1: 12.02, y1: 6.11, x2: 12.02, y2: 12.93, stroke: true },
    { t: "polyline", points: "2.41 6.97 8 3.07 13.59 6.97", stroke: true }
  ],
  num0: [{ t: "path", d: "M8,3.63c.6,0,1.09.14,1.47.41.38.28.68.63.89,1.06.21.43.36.9.43,1.41.08.51.11,1.01.11,1.49s-.04.98-.11,1.49c-.08.51-.22.98-.43,1.41-.21.43-.51.78-.89,1.06-.38.28-.87.41-1.47.41s-1.09-.14-1.47-.41c-.38-.28-.68-.63-.89-1.06-.21-.43-.36-.9-.43-1.41-.08-.51-.11-1.01-.11-1.49s.04-.98.11-1.49c.08-.51.22-.98.43-1.41.21-.43.51-.78.89-1.06.38-.28.87-.41,1.47-.41ZM8,11.23c.3,0,.54-.09.74-.26.2-.17.36-.4.47-.7.12-.29.2-.63.25-1.03.05-.39.07-.81.07-1.25s-.02-.85-.07-1.24c-.05-.39-.13-.73-.25-1.03-.12-.3-.27-.53-.47-.7-.2-.17-.45-.26-.74-.26s-.55.09-.75.26c-.2.17-.35.41-.47.7-.12.3-.2.64-.25,1.03s-.07.8-.07,1.24.02.86.07,1.25c.05.39.13.73.25,1.03.12.29.27.52.47.7.2.17.45.26.75.26Z" }],
  num1: [{ t: "path", d: "M6.22,5.19c.29,0,.57-.02.84-.07s.52-.13.74-.24c.22-.11.41-.26.56-.43.16-.18.26-.39.31-.65h1.12v8.4h-1.5v-5.93h-2.06v-1.08Z" }],
  num2: [{ t: "path", d: "M10.86,12.28h-5.74c0-.7.18-1.3.5-1.82.33-.52.78-.97,1.34-1.36.27-.2.56-.39.85-.58.3-.19.57-.39.82-.61.25-.22.45-.45.61-.7.16-.25.24-.54.25-.87,0-.15-.02-.31-.05-.49-.04-.17-.11-.33-.21-.48s-.25-.27-.43-.37-.42-.15-.72-.15c-.27,0-.5.05-.68.16-.18.11-.32.26-.43.44-.11.19-.19.41-.24.67-.05.26-.08.53-.09.83h-1.37c0-.46.06-.89.19-1.29s.31-.74.56-1.03c.25-.29.55-.51.91-.68s.77-.25,1.24-.25c.51,0,.94.08,1.28.25.34.17.62.38.83.64.21.26.36.53.45.83.09.3.13.59.13.86,0,.34-.05.64-.16.91-.1.27-.24.52-.42.75-.18.23-.38.44-.6.63-.22.19-.46.37-.7.54-.24.17-.48.33-.72.48-.24.15-.46.3-.67.46-.2.15-.38.31-.53.47-.15.16-.26.34-.31.52h4.09v1.22Z" }],
  num3: [{ t: "path", d: "M7.4,7.28c.22,0,.45,0,.67-.05.22-.04.42-.11.6-.21.18-.1.32-.24.43-.41.11-.18.16-.39.16-.65,0-.36-.12-.65-.37-.86s-.56-.32-.94-.32c-.24,0-.45.05-.62.14-.18.1-.32.23-.44.39-.12.16-.2.35-.26.55-.06.2-.08.41-.07.63h-1.37c.02-.41.09-.79.23-1.13.14-.35.32-.65.56-.91s.52-.46.86-.6.72-.22,1.14-.22c.33,0,.65.05.97.14.32.1.6.24.85.42s.45.42.61.7c.15.28.23.61.23.98,0,.42-.1.79-.29,1.11-.19.32-.49.55-.9.69v.02c.48.1.85.33,1.12.71.27.38.4.84.4,1.39,0,.4-.08.76-.24,1.07-.16.32-.38.58-.65.8-.27.22-.59.39-.95.51-.36.12-.74.18-1.14.18-.49,0-.91-.07-1.28-.21s-.67-.34-.91-.59c-.24-.26-.43-.56-.56-.92-.13-.36-.2-.76-.2-1.2h1.37c-.02.51.11.94.38,1.28.27.34.67.51,1.21.51.46,0,.84-.13,1.15-.39.31-.26.46-.63.46-1.11,0-.33-.06-.59-.19-.78-.13-.19-.3-.34-.5-.44s-.44-.16-.7-.19c-.26-.02-.53-.03-.8-.02v-1.02Z" }],
  num4: [{ t: "path", d: "M10.99,10.21h-1.08v1.99h-1.3v-1.99h-3.6v-1.36l3.6-5.05h1.3v5.33h1.08v1.08ZM6.07,9.13h2.54v-3.7h-.02l-2.52,3.7Z" }],
  num5: [{ t: "path", d: "M6.13,3.72h4.34v1.22h-3.32l-.43,2.14.02.02c.18-.21.42-.37.7-.47.28-.11.57-.16.85-.16.42,0,.79.07,1.12.21s.6.34.83.59c.22.25.39.55.51.89.12.34.17.72.17,1.12,0,.34-.05.68-.16,1.04-.11.36-.28.68-.52.97s-.54.53-.91.72c-.37.19-.81.28-1.32.28-.41,0-.79-.05-1.13-.16s-.65-.27-.92-.49c-.26-.22-.47-.48-.63-.8-.16-.32-.24-.69-.26-1.11h1.37c.04.46.2.81.47,1.05s.63.37,1.08.37c.29,0,.53-.05.73-.14.2-.1.36-.23.49-.4.12-.17.21-.36.26-.59.05-.22.08-.46.08-.72,0-.23-.03-.45-.1-.67s-.16-.4-.29-.56c-.13-.16-.29-.29-.5-.38-.2-.1-.44-.14-.71-.14-.29,0-.56.05-.81.16-.25.11-.43.31-.55.61h-1.37l.9-4.6Z" }],
  num6: [{ t: "path", d: "M9.4,5.92c-.03-.34-.15-.62-.37-.83s-.5-.32-.86-.32c-.25,0-.46.05-.64.14-.18.09-.33.21-.46.37s-.22.33-.3.52c-.08.2-.14.4-.19.62-.05.22-.08.43-.1.64s-.04.41-.05.59l.02.02c.18-.34.44-.59.76-.75s.67-.25,1.05-.25c.42,0,.79.07,1.12.22s.61.34.83.59.4.55.52.89.18.72.18,1.12-.07.79-.2,1.13c-.13.35-.32.65-.57.91-.25.26-.54.46-.89.61s-.72.22-1.14.22c-.62,0-1.12-.11-1.52-.34s-.71-.54-.94-.94-.39-.86-.47-1.39c-.09-.53-.13-1.11-.13-1.72,0-.5.05-1.01.16-1.52.11-.51.29-.98.53-1.4s.57-.76.98-1.03c.4-.26.9-.4,1.49-.4.34,0,.65.06.95.17s.56.27.79.47c.23.2.41.44.56.72.14.28.22.59.24.94h-1.37ZM8.08,11.23c.25,0,.46-.05.65-.15s.34-.23.46-.39c.12-.16.22-.35.28-.56s.09-.43.09-.65-.03-.44-.09-.65-.15-.39-.28-.55c-.12-.16-.28-.28-.46-.38-.18-.1-.4-.14-.65-.14s-.47.05-.65.14c-.19.09-.35.22-.47.37-.13.16-.22.34-.29.55s-.1.43-.1.66.03.45.1.66.16.39.29.56.29.29.47.39c.19.1.41.14.65.14Z" }],
  num7: [{ t: "path", d: "M5.13,3.8h5.75v1.14c-.44.5-.84,1.01-1.2,1.54-.36.53-.67,1.1-.94,1.69-.27.6-.49,1.23-.65,1.89-.17.66-.28,1.38-.34,2.14h-1.5c.05-.66.16-1.32.34-1.97.18-.65.41-1.28.7-1.88.28-.61.61-1.19.99-1.75s.78-1.08,1.21-1.57h-4.36v-1.22Z" }],
  num8: [{ t: "path", d: "M8,12.37c-.42,0-.82-.06-1.18-.18-.36-.12-.68-.29-.94-.52-.26-.23-.47-.51-.62-.83-.15-.33-.22-.7-.22-1.1,0-.53.14-.97.41-1.33.28-.36.65-.6,1.12-.72v-.02c-.38-.14-.68-.37-.88-.67-.2-.3-.31-.65-.31-1.06,0-.72.23-1.28.68-1.69s1.1-.61,1.94-.61,1.49.2,1.94.61.68.97.68,1.69c0,.41-.1.76-.31,1.06-.2.3-.5.52-.88.67v.02c.47.12.85.36,1.12.72.28.36.41.8.41,1.33,0,.41-.07.78-.22,1.1-.15.33-.35.61-.62.83s-.58.4-.94.52c-.36.12-.76.18-1.18.18ZM8,11.29c.46,0,.84-.14,1.14-.41.3-.27.46-.66.46-1.15,0-.46-.15-.83-.46-1.09-.3-.26-.68-.39-1.14-.39s-.84.13-1.14.39c-.3.26-.46.62-.46,1.09,0,.5.15.88.46,1.15.3.27.68.41,1.14.41ZM8,4.71c-.37,0-.68.11-.94.33-.26.22-.38.54-.38.95s.12.71.37.92c.25.21.56.32.95.32s.7-.11.95-.32c.25-.21.37-.52.37-.92s-.13-.73-.38-.95c-.26-.22-.57-.33-.94-.33Z" }],
  num9: [{ t: "path", d: "M6.6,10.08c.03.34.15.62.37.83s.5.32.86.32.66-.1.88-.29c.22-.2.39-.44.51-.73.12-.29.2-.6.25-.94s.08-.64.1-.92l-.02-.02c-.18.33-.44.58-.76.75-.32.17-.67.26-1.06.26s-.76-.07-1.09-.2c-.32-.14-.6-.33-.83-.57-.23-.24-.41-.54-.54-.89-.13-.35-.19-.74-.19-1.17,0-.41.06-.79.19-1.13s.32-.65.56-.91c.25-.26.55-.46.91-.61.36-.14.77-.22,1.22-.22.59,0,1.08.11,1.46.34.38.23.69.54.91.94s.37.86.46,1.4c.09.54.13,1.11.13,1.72,0,.5-.05,1.01-.16,1.52-.11.51-.29.98-.53,1.4s-.57.76-.98,1.03-.9.4-1.49.4c-.34,0-.65-.06-.95-.17s-.56-.27-.79-.47c-.23-.2-.41-.44-.56-.72-.14-.28-.22-.59-.24-.94h1.37ZM7.9,4.77c-.25,0-.46.05-.65.14-.18.09-.34.22-.46.38-.12.16-.21.34-.27.55-.06.21-.09.42-.09.65s.03.45.09.67c.06.21.15.4.27.56.12.16.27.29.46.39.18.1.4.15.65.15s.48-.05.67-.14c.19-.1.35-.23.47-.39.12-.16.22-.35.28-.56s.1-.43.1-.67-.03-.44-.1-.65-.16-.39-.28-.55c-.12-.16-.28-.28-.47-.38-.19-.1-.42-.14-.67-.14Z" }],
  charA: [{ t: "path", d: "M7.2,3.72h1.6l3.3,8.57h-1.61l-.8-2.27h-3.42l-.8,2.27h-1.55L7.2,3.72ZM6.67,8.88h2.62l-1.28-3.68h-.04l-1.3,3.68Z" }],
  charB: [{ t: "path", d: "M4.45,3.72h4.16c.77,0,1.38.18,1.85.53s.7.88.7,1.6c0,.43-.11.8-.32,1.11s-.51.55-.91.71v.02c.53.11.93.36,1.2.75.27.39.41.87.41,1.46,0,.34-.06.65-.18.94-.12.29-.31.54-.56.76-.26.21-.58.38-.98.5s-.88.19-1.43.19h-3.94V3.72ZM5.95,7.3h2.45c.36,0,.66-.1.9-.31.24-.2.36-.5.36-.88,0-.43-.11-.74-.32-.91-.22-.18-.53-.26-.94-.26h-2.45v2.36ZM5.95,11.06h2.65c.46,0,.81-.12,1.06-.35.25-.24.38-.57.38-1s-.13-.75-.38-.98-.61-.34-1.06-.34h-2.65v2.68Z" }],
  charC: [{ t: "path", d: "M10.36,6.44c-.06-.25-.15-.48-.26-.68-.11-.21-.26-.39-.43-.54-.18-.15-.38-.27-.62-.35s-.51-.13-.82-.13c-.46,0-.85.09-1.18.28s-.6.43-.81.74c-.21.31-.36.66-.46,1.05s-.15.79-.15,1.2.05.81.15,1.2.25.74.46,1.05c.21.31.48.55.81.74s.73.28,1.18.28c.34,0,.63-.06.89-.17.26-.12.48-.28.66-.48.18-.2.33-.44.43-.71.1-.27.17-.56.2-.88h1.46c-.03.51-.14.98-.33,1.4-.19.42-.44.79-.76,1.1-.32.31-.7.55-1.13.71-.43.17-.91.25-1.43.25-.64,0-1.21-.12-1.72-.35s-.94-.56-1.29-.97c-.35-.41-.62-.88-.81-1.43s-.28-1.12-.28-1.74.09-1.18.28-1.73c.19-.54.46-1.02.81-1.43.35-.41.78-.73,1.29-.97.51-.24,1.08-.36,1.72-.36.48,0,.93.07,1.36.2.42.13.8.32,1.12.58.32.25.59.56.79.92.2.36.32.77.37,1.24h-1.5Z" }],
  charD: [{ t: "path", d: "M4.33,3.72h3.55c.66,0,1.22.11,1.7.34s.87.53,1.18.92c.3.39.53.84.68,1.36.15.52.22,1.08.22,1.67s-.07,1.15-.22,1.67c-.15.52-.37.97-.68,1.36-.3.39-.7.69-1.18.92s-1.05.34-1.7.34h-3.55V3.72ZM5.83,11.06h1.48c.58,0,1.06-.08,1.43-.23.37-.16.66-.37.88-.65.21-.28.36-.6.43-.97s.11-.77.11-1.21-.04-.83-.11-1.21c-.08-.37-.22-.7-.43-.97-.21-.28-.5-.49-.88-.65-.37-.16-.85-.23-1.43-.23h-1.48v6.12Z" }]
};

const ICON_OPTIONS = [
  { key: "", label: "なし" },
  { key: "user", label: "人" },
  { key: "users", label: "複数の人" },
  { key: "building", label: "会社" },
  { key: "goal", label: "目標" },
  { key: "alert", label: "アラート" },
  { key: "male", label: "男性" },
  { key: "female", label: "女性" },
  { key: "home", label: "ホーム" }
];

// 数字・アルファベットは見た目だけで判別できるため見出し不要。コンパクトな別グリッドで表示する。
const ICON_OPTIONS_COMPACT = [
  { key: "charA" }, { key: "charB" }, { key: "charC" }, { key: "charD" },
  { key: "num0" }, { key: "num1" }, { key: "num2" }, { key: "num3" }, { key: "num4" },
  { key: "num5" }, { key: "num6" }, { key: "num7" }, { key: "num8" }, { key: "num9" }
];

const MONO = {
  fillLight: "#EFEFEF",
  fillMid: "#D6D6D6",
  stroke: "#444444",
  textTitle: "#2A2A2A",
  textSub: "#5C5C5C",
  line: "#888888",
  strokeSelected: "#1A1A1A"
};

const BG_OPTIONS = {
  white: "#FFFFFF",
  light: "#E7EAEE",
  dark: "#C4C7C9"
};

function emptyTemplate(pattern) {
  const make = (n, sub, bg) => ({ id: newId(), label: n, sublabel: sub || "", icon: "", shape: "rect", headingStyle: false, emphasis: false, bg: bg || "white" });
  switch (pattern) {
    case "opposition":
      return { pattern, title: "対立図", vsLabel: "vs", nodes: [make("立場A"), make("立場B")], edges: [] };
    case "containment": {
      const parent = make("大分類", "", "white");
      const c1 = make("分類1"), c2 = make("分類2");
      return { pattern, title: "包含図", nodes: [parent, c1, c2], edges: [] };
    }
    case "timeline": {
      const a = make("出来事1"), b = make("出来事2"), c = make("出来事3");
      return { pattern, title: "時系列図", nodes: [a, b, c], edges: [{ from: a.id, to: b.id }, { from: b.id, to: c.id }] };
    }
    case "network": {
      const center = make("中心概念");
      const o1 = make("関連1"), o2 = make("関連2"), o3 = make("関連3");
      return { pattern, title: "相関図", nodes: [center, o1, o2, o3], edges: [{ from: center.id, to: o1.id, strength: 2 }, { from: center.id, to: o2.id, strength: 1 }, { from: center.id, to: o3.id, strength: 3 }] };
    }
    case "hierarchy": {
      const top = make("上位");
      const c1 = make("下位1"), c2 = make("下位2");
      return { pattern, title: "階層図", nodes: [top, c1, c2], edges: [{ from: top.id, to: c1.id }, { from: top.id, to: c2.id }] };
    }
    case "cycle": {
      const a = make("段階1"), b = make("段階2"), c = make("段階3");
      return { pattern, title: "循環図", nodes: [a, b, c], edges: [{ from: a.id, to: b.id }, { from: b.id, to: c.id }, { from: c.id, to: a.id }] };
    }
    default:
      return null;
  }
}

function addNode(parsed) {
  const { pattern, nodes, edges } = parsed;
  const n = { id: newId(), label: "新項目", sublabel: "", icon: "", shape: "rect", headingStyle: false, emphasis: false, bg: "white" };
  const newNodes = [...nodes, n];
  let newEdges = [...edges];

  if (pattern === "timeline" || pattern === "cycle") {
    if (pattern === "cycle") {
      newEdges = newEdges.filter((e) => !(e.from === nodes[nodes.length - 1]?.id && e.to === nodes[0]?.id));
    }
    if (nodes.length > 0) newEdges.push({ from: nodes[nodes.length - 1].id, to: n.id, strength: 1 });
    if (pattern === "cycle") newEdges.push({ from: n.id, to: nodes[0].id, strength: 1 });
  } else if (pattern === "network" || pattern === "hierarchy") {
    if (nodes.length > 0) newEdges.push({ from: nodes[0].id, to: n.id, strength: 1 });
  }
  if (pattern === "containment" && nodes.length > 0) {
  }

  return { ...parsed, nodes: newNodes, edges: newEdges };
}

function removeNode(parsed, nodeId) {
  const { nodes, edges } = parsed;
  if (nodes.length <= 2) return parsed;
  const newNodes = nodes.filter((n) => n.id !== nodeId);
  const newEdges = edges.filter((e) => e.from !== nodeId && e.to !== nodeId);
  return { ...parsed, nodes: newNodes, edges: newEdges };
}

function nodeSize(node, hasIcon, minW, minH) {
  if (node.shape === "circle") {
    const d = circleDiameter(node, hasIcon);
    const neededByContent = minBoxHeightForIcon(node, hasIcon, minH) * 1.3;
    const size = Math.max(d, minW, neededByContent);
    return { w: size, h: size };
  }
  const h = minBoxHeightForIcon(node, hasIcon, minH);
  return { w: Math.max(minBoxWidth(node, hasIcon), minW), h };
}

function layout(parsed, style) {
  const { pattern, nodes, edges } = parsed;
  const W = 760;
  const boxH = 60;
  const densityScale = 0.5 + (style.density != null ? style.density : 0.5) * 1.5;
  const minGap = 40 * densityScale;
  const safeW = W - 120;

  const maxEdgeLabelWidth = (edges || []).reduce((max, e) => {
    if (!e.label) return max;
    const lineWidths = e.label.split("\n").map((l) => textWidth(l, 13));
    return Math.max(max, ...lineWidths);
  }, 0);
  const labelGapExtra = maxEdgeLabelWidth > 0 ? maxEdgeLabelWidth + 24 : 0;

  if (pattern === "opposition") {
    const vertical = parsed.direction === "vertical";
    const s0 = nodeSize(nodes[0], !!nodes[0].icon, 200, boxH);
    const s1 = nodeSize(nodes[1], !!nodes[1].icon, 200, boxH);
    const vsLines = (parsed.vsLabel || "vs").split("\n");
    if (!vertical) {
      const maxH = Math.max(s0.h, s1.h);
      const H = maxH + 80;
      const vsWidth = Math.max(...vsLines.map((l) => textWidth(l, 12)), 0);
      const gap = Math.max(90 * densityScale, vsWidth + 60);
      const totalW = s0.w + s1.w + gap;
      const startX = Math.max(40, (W - totalW) / 2);
      const midY = H / 2;
      return { W, H, positions: {
        [nodes[0].id]: { x: startX, y: midY - s0.h / 2, w: s0.w, h: s0.h, shape: nodes[0].shape },
        [nodes[1].id]: { x: startX + s0.w + gap, y: midY - s1.h / 2, w: s1.w, h: s1.h, shape: nodes[1].shape }
      }, vertical: false };
    } else {
      const maxW = Math.max(s0.w, s1.w);
      const vsHeight = vsLines.length * 16;
      const gap = Math.max(70 * densityScale, vsHeight + 50);
      const totalH = s0.h + s1.h + gap;
      const midX = W / 2;
      return { W, H: totalH + 80, positions: {
        [nodes[0].id]: { x: midX - s0.w / 2, y: 40, w: s0.w, h: s0.h, shape: nodes[0].shape },
        [nodes[1].id]: { x: midX - s1.w / 2, y: 40 + s0.h + gap, w: s1.w, h: s1.h, shape: nodes[1].shape }
      }, vertical: true };
    }
  }

  if (pattern === "containment") {
    const children = nodes.slice(1);
    const sizes = children.map((n) => nodeSize(n, !!n.icon, 130, 110));
    const gap = 36 * densityScale;
    const childrenTotalW = sizes.reduce((a, s) => a + s.w, 0) + Math.max(0, children.length - 1) * gap;
    const parentW = Math.max(childrenTotalW + 80, 640);
    const childMaxH = Math.max(...sizes.map((s) => s.h));
    const parentLabelH = 56;
    const parentH = parentLabelH + childMaxH + 30;
    const H = parentH + 70;
    const positions = {
      [nodes[0].id]: { x: (W - parentW) / 2, y: 40, w: parentW, h: parentH, isParent: true, shape: "rect", labelTop: true, depth: 0 }
    };
    let cx = (W - childrenTotalW) / 2;
    const childY = 40 + parentLabelH;
    children.forEach((n, i) => {
      positions[n.id] = { x: cx, y: childY, w: sizes[i].w, h: sizes[i].h, shape: n.shape, depth: 1 };
      cx += sizes[i].w + gap;
    });
    return { W, H, positions };
  }

  if (pattern === "timeline") {
    const vertical = parsed.direction === "vertical";
    const sizes = nodes.map((n) => nodeSize(n, !!n.icon, 120, boxH));
    const gapWithLabel = minGap + labelGapExtra;
    let totalW = sizes.reduce((a, s) => a + s.w, 0) + Math.max(0, nodes.length - 1) * gapWithLabel;
    let scale = totalW > safeW ? safeW / totalW : 1;
    const scaledSizes = sizes.map((s) => ({ w: s.w * scale, h: s.h * scale }));
    const scaledGap = minGap * scale + labelGapExtra;
    const scaledTotal = scaledSizes.reduce((a, s) => a + s.w, 0) + Math.max(0, nodes.length - 1) * scaledGap;
    const positions = {};
    if (!vertical) {
      const startX = (W - scaledTotal) / 2;
      const maxH = Math.max(...scaledSizes.map((s) => s.h), boxH);
      const H = maxH + 80 + (maxEdgeLabelWidth > 0 ? 16 : 0);
      let cx = startX;
      const rowY = H / 2;
      nodes.forEach((node, i) => {
        const s = scaledSizes[i];
        positions[node.id] = { x: cx, y: rowY - s.h / 2, w: s.w, h: s.h, shape: node.shape };
        cx += s.w + scaledGap;
      });
      return { W, H, positions, vertical: false };
    } else {
      const colX = W / 2;
      const startY = 40;
      let cy = startY;
      nodes.forEach((node, i) => {
        const s = scaledSizes[i];
        positions[node.id] = { x: colX - s.w / 2, y: cy, w: s.w, h: s.h, shape: node.shape };
        cy += s.h + scaledGap;
      });
      const H = cy - scaledGap + 40;
      return { W, H, positions, vertical: true };
    }
  }

  if (pattern === "network") {
    const center = nodes[0];
    const outer = nodes.slice(1);
    const centerSize = nodeSize(center, !!center.icon, 150, boxH);
    const outerSizes = outer.map((n) => nodeSize(n, !!n.icon, 140, 56));

    // 外側ノードの個数ごとに、見た目が左右・上下対称になる自然なスロット組み合わせを固定で使う。
    // (個数で素直に slots[i % 4] を割り振ると、例えば2個のときに top+right の
    // L字配置になり不自然に見えるため、個数別に綺麗な形を明示的に定義する。)
    const slotSets = {
      1: ["top"],
      2: ["left", "right"],
      3: ["top", "left", "right"],
      4: ["top", "right", "bottom", "left"],
      5: ["top", "right", "bottom-right", "left", "bottom-left"],
      6: ["top", "top-right", "bottom-right", "bottom", "bottom-left", "top-left"],
      7: ["top", "top-right", "right", "bottom-right", "bottom-left", "left", "top-left"],
      8: ["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"]
    };
    const n = outer.length;
    let slotsForN;
    if (slotSets[n]) {
      slotsForN = slotSets[n];
    } else {
      // 9個以上は8方向ループで割り当てる（同方向は重複時オフセットで処理）
      const base = ["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"];
      slotsForN = Array.from({ length: n }, (_, i) => base[i % 8]);
    }
    const slotCounts = {};
    const assigned = outer.map((n2, i) => {
      const slot = slotsForN[i];
      const order = slotCounts[slot] || 0;
      slotCounts[slot] = order + 1;
      return { node: n2, size: outerSizes[i], slot, order };
    });

    // 各方向の角度（ラジアン、0=右方向、反時計回りではなくSVGのy下方向系に合わせて時計回り）
    const slotAngle = {
      top: -Math.PI / 2,
      "top-right": -Math.PI / 4,
      right: 0,
      "bottom-right": Math.PI / 4,
      bottom: Math.PI / 2,
      "bottom-left": (Math.PI * 3) / 4,
      left: Math.PI,
      "top-left": (-Math.PI * 3) / 4
    };
    const angleOf = (a) => slotAngle[a.slot];

    const gapBase = 24 * densityScale + 16;
    // 中心から角度theta方向に進んだとき、半幅hw・半高hhの矩形の境界に当たるまでの距離。
    const rectBoundaryDist = (theta, hw, hh) => {
      const c = Math.cos(theta), s = Math.sin(theta);
      if (c === 0) return hh / Math.abs(s);
      if (s === 0) return hw / Math.abs(c);
      return Math.min(hw / Math.abs(c), hh / Math.abs(s));
    };

    let outerCenters;
    if (n <= 4) {
      // 4個以下は上下左右のみ(斜めなし)なので、方向ごとに矩形境界距離を個別計算しても重ならない。
      outerCenters = assigned.map((a) => {
        const angle = angleOf(a);
        const centerHalf = rectBoundaryDist(angle, centerSize.w / 2, centerSize.h / 2);
        const outerHalf = rectBoundaryDist(angle, a.size.w / 2, a.size.h / 2);
        const rr = centerHalf + outerHalf + gapBase;
        return { x: Math.cos(angle) * rr, y: Math.sin(angle) * rr, size: a.size, slot: a.slot };
      });
    } else {
      // 5個以上は斜め方向(45度刻み)を含むため、方向ごとの矩形境界距離を使うと
      // 隣接する方向（例: top と top-right）の見た目の高さがほぼ同じになり重なってしまう。
      // そのため全方向で共通の十分な半径を円周配置に使い、隣接ノード間の中心距離を一定以上確保する。
      const maxOuterDiag = Math.max(...assigned.map((a) => Math.sqrt(a.size.w * a.size.w + a.size.h * a.size.h)));
      const centerDiag = Math.sqrt(centerSize.w * centerSize.w + centerSize.h * centerSize.h);
      // 隣接スロット間の角度差(8方向なら45度)で、隣接ノード同士が重ならないために必要な円周長さからも半径を求める。
      const angleStep = (Math.PI * 2) / 8;
      const neededByAdjacent = (maxOuterDiag + gapBase) / (2 * Math.sin(angleStep / 2));
      const neededByCenter = centerDiag / 2 + maxOuterDiag / 2 + gapBase;
      const r = Math.max(neededByAdjacent, neededByCenter);
      outerCenters = assigned.map((a) => {
        const angle = angleOf(a);
        const extra = a.order * (Math.max(a.size.w, a.size.h) + gapBase * 0.6);
        const rr = r + extra;
        return { x: Math.cos(angle) * rr, y: Math.sin(angle) * rr, size: a.size, slot: a.slot };
      });
    }

    const minX = Math.min(0, ...outerCenters.map((o) => o.x - o.size.w / 2)) - centerSize.w / 2;
    const maxX = Math.max(0, ...outerCenters.map((o) => o.x + o.size.w / 2)) + centerSize.w / 2;
    const minY = Math.min(0, ...outerCenters.map((o) => o.y - o.size.h / 2)) - centerSize.h / 2;
    const maxY = Math.max(0, ...outerCenters.map((o) => o.y + o.size.h / 2)) + centerSize.h / 2;

    const contentW = maxX - minX;
    const contentH = maxY - minY;
    const pad = 40;

    const finalH = Math.max(380, contentH + pad * 2);
    const finalW = Math.max(W, contentW + pad * 2);

    const cx = finalW / 2 - (minX + maxX) / 2;
    const cy = finalH / 2 - (minY + maxY) / 2;

    const positions = { [center.id]: { x: cx - centerSize.w / 2, y: cy - centerSize.h / 2, w: centerSize.w, h: centerSize.h, isCenter: true, shape: center.shape } };
    outer.forEach((n, i) => {
      const o = outerCenters[i];
      positions[n.id] = { x: cx + o.x - o.size.w / 2, y: cy + o.y - o.size.h / 2, w: o.size.w, h: o.size.h, shape: n.shape };
    });
    return { W: finalW, H: finalH, positions, cx, cy };
  }

  if (pattern === "hierarchy") {
    const vertical = parsed.direction === "vertical";
    const topSize = nodeSize(nodes[0], !!nodes[0].icon, 170, boxH);
    const children = nodes.slice(1);
    const childSizes = children.map((n) => nodeSize(n, !!n.icon, 140, boxH));
    if (!vertical) {
      const gap = 64 * densityScale;
      const totalW = childSizes.reduce((a, s) => a + s.w, 0) + Math.max(0, children.length - 1) * gap;
      const maxChildH = Math.max(...childSizes.map((s) => s.h), boxH);
      const H = 36 + topSize.h + 80 + maxChildH + 30;
      const positions = { [nodes[0].id]: { x: (W - topSize.w) / 2, y: 36, w: topSize.w, h: topSize.h, shape: nodes[0].shape } };
      let cx = (W - totalW) / 2;
      const childY = 36 + topSize.h + 80;
      children.forEach((n, i) => {
        const s = childSizes[i];
        positions[n.id] = { x: cx, y: childY, w: s.w, h: s.h, shape: n.shape };
        cx += s.w + gap;
      });
      return { W, H, positions, hVertical: false };
    } else {
      const gap = 30 * densityScale;
      const totalH = childSizes.reduce((a, s) => a + s.h, 0) + Math.max(0, children.length - 1) * gap;
      const colX = 130, childColX = 420;
      const H = Math.max(totalH + 80, 220);
      const positions = { [nodes[0].id]: { x: colX - topSize.w / 2, y: H / 2 - topSize.h / 2, w: topSize.w, h: topSize.h, shape: nodes[0].shape } };
      let cy = (H - totalH) / 2;
      children.forEach((n, i) => {
        const s = childSizes[i];
        positions[n.id] = { x: childColX, y: cy, w: s.w, h: s.h, shape: n.shape };
        cy += s.h + gap;
      });
      return { W, H, positions, hVertical: true };
    }
  }

  if (pattern === "cycle") {
    const n = nodes.length;
    const vertical = parsed.direction === "vertical";
    if (n <= 4) {
      const sizes = nodes.map((nd) => nodeSize(nd, !!nd.icon, 120, boxH));
      const gapWithLabel = minGap + labelGapExtra;
      let totalW = sizes.reduce((a, s) => a + s.w, 0) + Math.max(0, n - 1) * gapWithLabel;
      let scale = totalW > safeW ? safeW / totalW : 1;
      const scaledSizes = sizes.map((s) => ({ w: s.w * scale, h: s.h * scale }));
      const scaledGap = minGap * scale + labelGapExtra;
      const scaledTotal = scaledSizes.reduce((a, s) => a + s.w, 0) + Math.max(0, n - 1) * scaledGap;
      const positions = {};
      if (!vertical) {
        const startX = (W - scaledTotal) / 2;
        const maxH = Math.max(...scaledSizes.map((s) => s.h), boxH);
        // 戻り線（下を通る∪字パス）専用のスペースを上下マージンとして確保する。
        // 以前はH-26固定で、ノードが高いと戻り線とノードが重なっていた。
        const returnLineMargin = 70;
        const topMargin = 50;
        const H = topMargin + maxH + returnLineMargin;
        let cx = startX;
        const rowY = topMargin + maxH / 2;
        nodes.forEach((node, i) => {
          const s = scaledSizes[i];
          positions[node.id] = { x: cx, y: rowY - s.h / 2, w: s.w, h: s.h, shape: node.shape };
          cx += s.w + scaledGap;
        });
        return { W, H, positions, circular: false, vertical: false, maxH, topMargin };
      } else {
        const colX = W / 2;
        let cy = 40;
        nodes.forEach((node, i) => {
          const s = scaledSizes[i];
          positions[node.id] = { x: colX - s.w / 2, y: cy, w: s.w, h: s.h, shape: node.shape };
          cy += s.h + scaledGap;
        });
        const H = cy - scaledGap + 60;
        return { W, H, positions, circular: false, vertical: true };
      }
    } else {
      const cx = 380, cy = 270;
      const sizes = nodes.map((node) => nodeSize(node, !!node.icon, 130, 56));
      const maxSize = Math.max(...sizes.map((s) => Math.max(s.w, s.h)), 56);
      const radius = Math.max(200, maxSize * 1.3) * densityScale;
      const finalH = Math.max(520, radius * 2 + maxSize + 80);
      const positions = {};
      nodes.forEach((node, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const s = sizes[i];
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        positions[node.id] = { x: x - s.w / 2, y: y - s.h / 2, w: s.w, h: s.h, shape: node.shape };
      });
      return { W, H: finalH, positions, circular: true, cx, cy, radius };
    }
  }

  return { W, H: 200, positions: {} };
}

function NodeIcon({ icon, x, y, size, color }) {
  if (!icon || !ICON_SHAPES[icon]) return null;
  const scale = size / 16;
  const shapes = ICON_SHAPES[icon];
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {shapes.map((s, i) => {
        if (s.t === "circle") {
          return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />;
        }
        if (s.t === "path") {
          return s.stroke
            ? <path key={i} d={s.d} fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            : <path key={i} d={s.d} fill={color} />;
        }
        if (s.t === "polyline") {
          return <polyline key={i} points={s.points} fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />;
        }
        if (s.t === "line") {
          return <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />;
        }
        return null;
      })}
    </g>
  );
}

function EditableNode({ node, pos, isParent, isSelected, onSelect, style, connectMode }) {
  const midY = pos.y + pos.h / 2;
  const isCircle = pos.shape === "circle";
  const emphasis = !!node.emphasis;
  const labelTop = !!pos.labelTop;
  const invert = !!style.invert;

  const bgKey = node.bg || "white";
  const baseFill = BG_OPTIONS[bgKey] || BG_OPTIONS.light;

  // 反転時は背景を黒ベタで塗る。fill: none にすると図形の内側が透明になり、
  // 背後を通る接続線が図形の中に透けて見えてしまうため、黒背景で隠す形にする。
  const fill = invert ? "#1A1A1A" : (emphasis ? "#1A1A1A" : baseFill);
  const strokeColor = isSelected ? "#A32D2D" : (invert ? "#FFFFFF" : (emphasis ? "#1A1A1A" : "#000000"));
  const titleColor = invert ? "#FFFFFF" : (emphasis ? "#FFFFFF" : "#000000");
  const subColor = invert ? "#FFFFFF" : (emphasis ? "#FFFFFF" : "#000000");

  const hasIcon = !!node.icon;
  const iconSizeMap = { small: 16, medium: 24, large: 34 };
  const iconSize = iconSizeMap[node.iconSize || "medium"];
  const titleSize = node.headingStyle ? 18 : 14;
  const titleWeight = node.headingStyle ? 700 : 500;
  const subSize = node.headingStyle ? 13 : 12;
  const titleLineH = 22;
  const subLineH = 16;

  const pad = paddingForDepth(pos.depth);

  const titleLines = (node.label || "").split("\n");
  const hasSub = !!node.sublabel;
  const subLines = hasSub ? node.sublabel.split("\n") : [];

  const iconTopPad = hasIcon ? iconSize + pad.iconGap : 0;
  const titleBlockH = titleLines.length * titleLineH;
  const subBlockH = hasSub ? subLines.length * subLineH : 0;
  const blockH = iconTopPad + titleBlockH + subBlockH;
  const blockTop = labelTop ? pos.y + pad.outer : midY - blockH / 2;
  const iconY = blockTop;
  const titleTop = blockTop + iconTopPad;
  const titleFirstLineY = titleTop + titleLineH / 2;
  const subFirstLineY = titleTop + titleBlockH + subLineH / 2;

  const shapeEl = isCircle ? (
    <circle
      cx={pos.x + pos.w / 2} cy={pos.y + pos.h / 2} r={pos.w / 2}
      fill={fill} stroke={strokeColor}
      strokeWidth={isSelected ? style.lineWidth + 1 : style.lineWidth}
      strokeDasharray={connectMode ? "4 3" : undefined}
    />
  ) : (
    <rect
      x={pos.x} y={pos.y} width={pos.w} height={pos.h}
      rx={isParent ? style.radius + 10 : style.radius}
      fill={fill} stroke={strokeColor}
      strokeWidth={isSelected ? style.lineWidth + 1 : style.lineWidth}
      strokeDasharray={connectMode ? "4 3" : undefined}
    />
  );

  return (
    <g onClick={(ev) => { ev.stopPropagation(); onSelect(node.id); }} style={{ cursor: "pointer" }}>
      {shapeEl}
      {hasIcon && (
        <NodeIcon icon={node.icon} x={pos.x + pos.w / 2 - iconSize / 2} y={iconY} size={iconSize} color={subColor} />
      )}
      <text
        x={pos.x + pos.w / 2}
        textAnchor="middle" dominantBaseline="central"
        fontSize={titleSize} fontWeight={titleWeight} fill={titleColor}
      >
        {titleLines.map((line, li) => (
          <tspan key={li} x={pos.x + pos.w / 2} y={titleFirstLineY + li * titleLineH}>{line}</tspan>
        ))}
      </text>
      {hasSub && (
        <text
          x={pos.x + pos.w / 2}
          textAnchor="middle" dominantBaseline="central" fontSize={subSize} fill={subColor}
        >
          {subLines.map((line, li) => (
            <tspan key={li} x={pos.x + pos.w / 2} y={subFirstLineY + li * subLineH}>{line}</tspan>
          ))}
        </text>
      )}
    </g>
  );
}

const DiagramCanvas = React.forwardRef(function DiagramCanvas({ parsed, style, selectedId, onSelect, selectedEdgeIndex, onSelectEdge, connectMode, connectFrom }, svgRef) {
  const { pattern, nodes, edges } = parsed;
  const layoutResult = layout(parsed, style);
  const { W, H, positions, circular, cx, cy, radius, vertical, maxH, topMargin } = layoutResult;
  const lw = style.lineWidth;
  const invert = !!style.invert;
  const lineColor = invert ? "#FFFFFF" : "#000000";
  const arrowMarker = invert ? "url(#arrow-inv)" : "url(#arrow)";
  const canEditEdges = pattern === "timeline" || pattern === "cycle" || pattern === "network" || pattern === "hierarchy";

  const renderEdge = (key, edgeIndex, pathOrLine, isCurve, labelPos, anchor) => {
    const isSelected = selectedEdgeIndex === edgeIndex;
    const color = isSelected ? "#A32D2D" : lineColor;
    const commonProps = isCurve
      ? { d: pathOrLine }
      : { x1: pathOrLine.x1, y1: pathOrLine.y1, x2: pathOrLine.x2, y2: pathOrLine.y2 };
    const Tag = isCurve ? "path" : "line";
    const edgeLabel = edges && edges[edgeIndex] ? edges[edgeIndex].label : "";
    const lines = edgeLabel ? edgeLabel.split("\n") : [];
    const textAnchor = anchor || "middle";
    return (
      <g key={key} style={{ cursor: canEditEdges ? "pointer" : "default" }} onClick={(ev) => { if (canEditEdges) { ev.stopPropagation(); onSelectEdge(edgeIndex); } }}>
        {canEditEdges && (
          <Tag {...commonProps} fill="none" stroke="transparent" strokeWidth={Math.max(lw, 1) + 14} strokeLinejoin="round" strokeLinecap="round" />
        )}
        <Tag {...commonProps} fill="none" stroke={color} strokeWidth={isSelected ? lw + 1 : lw} strokeLinejoin="round" strokeLinecap="round" markerEnd={pathOrLine.noArrow ? undefined : (isSelected ? "url(#arrow-sel)" : arrowMarker)} />
        {lines.length > 0 && labelPos && (
          <text x={labelPos.x} y={labelPos.y} textAnchor={textAnchor} fontSize="13" fill={invert ? "#FFFFFF" : "#000000"}>
            {lines.map((l, li) => <tspan key={li} x={labelPos.x} dy={li === 0 ? 0 : 16}>{l}</tspan>)}
          </text>
        )}
      </g>
    );
  };

  const connectors = [];
  if (pattern === "opposition") {
    const a = positions[nodes[0].id], b = positions[nodes[1].id];
    const vsLines = (parsed.vsLabel || "vs").split("\n");
    if (vertical) {
      const midX = a.x + a.w / 2;
      connectors.push(<line key="vsline" x1={midX} y1={a.y + a.h} x2={midX} y2={b.y} stroke={lineColor} strokeWidth={lw} />);
      connectors.push(
        <text key="vstxt" x={midX + 16} y={(a.y + a.h + b.y) / 2 - (vsLines.length - 1) * 7} textAnchor="start" fontSize="13" fill={invert ? "#FFFFFF" : "#000000"}>
          {vsLines.map((l, li) => <tspan key={li} x={midX + 16} dy={li === 0 ? 0 : 14}>{l}</tspan>)}
        </text>
      );
    } else {
      const midY = a.y + a.h / 2;
      connectors.push(<line key="vsline" x1={a.x + a.w} y1={midY} x2={b.x} y2={midY} stroke={lineColor} strokeWidth={lw} />);
      connectors.push(
        <text key="vstxt" x={(a.x + a.w + b.x) / 2} y={midY - 14 - (vsLines.length - 1) * 7} textAnchor="middle" fontSize="13" fill={invert ? "#FFFFFF" : "#000000"}>
          {vsLines.map((l, li) => <tspan key={li} x={(a.x + a.w + b.x) / 2} dy={li === 0 ? 0 : 14}>{l}</tspan>)}
        </text>
      );
    }
  } else if (pattern === "timeline") {
    const gap = 6;
    (edges || []).forEach((e, i) => {
      const a = positions[e.from], b = positions[e.to];
      if (!a || !b) return;
      if (vertical) {
        const midX = a.x + a.w / 2;
        const y1 = a.y + a.h + gap, y2 = b.y - gap;
        connectors.push(renderEdge("e" + i, i, { x1: midX, y1, x2: midX, y2 }, false, { x: midX + 16, y: (y1 + y2) / 2 + 4 }, "start"));
      } else {
        const midY = a.y + a.h / 2;
        const x1 = a.x + a.w + gap, x2 = b.x - gap;
        connectors.push(renderEdge("e" + i, i, { x1, y1: midY, x2, y2: midY }, false, { x: (x1 + x2) / 2, y: midY - 16 }));
      }
    });
  } else if (pattern === "cycle") {
    const edgeGap = 6;
    if (circular) {
      (edges || []).forEach((e, i) => {
        const a = positions[e.from], b = positions[e.to];
        if (!a || !b) return;
        const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
        const bx = b.x + b.w / 2, by = b.y + b.h / 2;
        const ar = a.w / 2 + edgeGap, br = b.w / 2 + edgeGap;
        const abx = bx - ax, aby = by - ay;
        const abDist = Math.sqrt(abx * abx + aby * aby) || 1;
        const startX = ax + (abx / abDist) * ar, startY = ay + (aby / abDist) * ar;
        const endX = bx - (abx / abDist) * br, endY = by - (aby / abDist) * br;
        const mx = (startX + endX) / 2, my = (startY + endY) / 2;
        const dx = mx - cx, dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const pull = 0.15;
        const ctrlX = mx + (dx / dist) * radius * pull;
        const ctrlY = my + (dy / dist) * radius * pull;
        connectors.push(renderEdge("e" + i, i, `M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`, true, { x: ctrlX, y: ctrlY }));
      });
    } else if (vertical) {
      (edges || []).forEach((e, i) => {
        const a = positions[e.from], b = positions[e.to];
        if (!a || !b) return;
        const isReturn = e.from === nodes[nodes.length - 1]?.id && e.to === nodes[0]?.id;
        const midXa = a.x + a.w / 2, midXb = b.x + b.w / 2;
        if (isReturn) {
          const sideX = Math.max(a.x + a.w, b.x + b.w) + 50;
          const y1 = a.y + a.h / 2, y2 = b.y + b.h / 2;
          const x1 = a.x + a.w + edgeGap, x2 = b.x + b.w + edgeGap;
          const path = `M ${x1} ${y1} L ${sideX} ${y1} L ${sideX} ${y2} L ${x2} ${y2}`;
          connectors.push(renderEdge("e" + i, i, path, true, { x: sideX + 14, y: (y1 + y2) / 2 + 4 }, "start"));
        } else {
          const y1 = a.y + a.h + edgeGap, y2 = b.y - edgeGap;
          connectors.push(renderEdge("e" + i, i, { x1: midXa, y1, x2: midXb, y2 }, false, { x: midXa + 16, y: (y1 + y2) / 2 + 4 }, "start"));
        }
      });
    } else {
      // 横並びcycleの戻り線：常にノード群の下端から固定距離の位置を通す。
      // ノードの高さに応じてbottomYを計算するため、ノードが高くても戻り線とぶつからない。
      const nodeBottom = topMargin + maxH;
      const bottomY = nodeBottom + 36;
      (edges || []).forEach((e, i) => {
        const a = positions[e.from], b = positions[e.to];
        if (!a || !b) return;
        const isReturn = e.from === nodes[nodes.length - 1]?.id && e.to === nodes[0]?.id;
        if (isReturn) {
          const x1 = a.x + a.w / 2, y1 = a.y + a.h + edgeGap;
          const x2 = b.x + b.w / 2, y2 = b.y + b.h + edgeGap;
          const path = `M ${x1} ${y1} L ${x1} ${bottomY} L ${x2} ${bottomY} L ${x2} ${y2}`;
          connectors.push(renderEdge("e" + i, i, path, true, { x: (x1 + x2) / 2, y: bottomY + 16 }));
        } else {
          const midY = a.y + a.h / 2;
          const x1 = a.x + a.w + edgeGap, x2 = b.x - edgeGap;
          connectors.push(renderEdge("e" + i, i, { x1, y1: midY, x2, y2: midY }, false, { x: (x1 + x2) / 2, y: midY - 16 }));
        }
      });
    }
  } else if (pattern === "network") {
    (edges || []).forEach((e, i) => {
      const a = positions[e.from], b = positions[e.to];
      if (!a || !b) return;
      const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
      const bx = b.x + b.w / 2, by = b.y + b.h / 2;
      const isSelected = selectedEdgeIndex === i;
      const lines = e.label ? e.label.split("\n") : [];
      const mx = (ax + bx) / 2, my = (ay + by) / 2;
      const dx = bx - ax, dy = by - ay;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const offset = 14;
      const lx = mx - (dy / dist) * offset, ly = my + (dx / dist) * offset;
      connectors.push(
        <g key={"e" + i} style={{ cursor: "pointer" }} onClick={(ev) => { ev.stopPropagation(); onSelectEdge(i); }}>
          <line x1={ax} y1={ay} x2={bx} y2={by} stroke="transparent" strokeWidth={lw + 14} />
          <line x1={ax} y1={ay} x2={bx} y2={by} stroke={isSelected ? "#A32D2D" : lineColor} strokeWidth={isSelected ? lw + 1 : lw} />
          {lines.length > 0 && (
            <text x={lx} y={ly} textAnchor="middle" fontSize="13" fill={invert ? "#FFFFFF" : "#000000"}>
              {lines.map((l, li) => <tspan key={li} x={lx} dy={li === 0 ? 0 : 16}>{l}</tspan>)}
            </text>
          )}
        </g>
      );
    });
  } else if (pattern === "hierarchy") {
    const gap = 6;
    const validEdges = (edges || []).filter((e) => positions[e.from] && positions[e.to]);
    if (validEdges.length > 0) {
      const a0 = positions[validEdges[0].from];
      if (layoutResult.hVertical) {
        const trunkY = a0.y + a0.h / 2;
        const x1 = a0.x + a0.w + gap;
        const targets = validEdges.map((e) => positions[e.to]);
        const branchX = x1 + Math.min(...targets.map((b) => b.x - gap - x1)) * 0.5;
        const minBy = Math.min(trunkY, ...targets.map((b) => b.y + b.h / 2));
        const maxBy = Math.max(trunkY, ...targets.map((b) => b.y + b.h / 2));
        connectors.push(
          <g key="trunk-h">
            <line x1={x1} y1={trunkY} x2={branchX} y2={trunkY} stroke={lineColor} strokeWidth={lw} strokeLinecap="round" />
            <line x1={branchX} y1={minBy} x2={branchX} y2={maxBy} stroke={lineColor} strokeWidth={lw} strokeLinecap="round" />
          </g>
        );
        validEdges.forEach((e, i) => {
          const b = positions[e.to];
          const midYb = b.y + b.h / 2;
          const x2 = b.x - gap;
          const path = `M ${branchX} ${midYb} L ${x2} ${midYb}`;
          connectors.push(renderEdge("e" + i, i, path, true, { x: (branchX + x2) / 2, y: midYb - 14 }, "middle"));
        });
      } else {
        const trunkX = a0.x + a0.w / 2;
        const y1 = a0.y + a0.h + gap;
        const targets = validEdges.map((e) => positions[e.to]);
        const branchY = y1 + Math.min(...targets.map((b) => b.y - gap - y1)) * 0.5;
        const minBx = Math.min(trunkX, ...targets.map((b) => b.x + b.w / 2));
        const maxBx = Math.max(trunkX, ...targets.map((b) => b.x + b.w / 2));
        connectors.push(
          <g key="trunk-v">
            <line x1={trunkX} y1={y1} x2={trunkX} y2={branchY} stroke={lineColor} strokeWidth={lw} strokeLinecap="round" />
            <line x1={minBx} y1={branchY} x2={maxBx} y2={branchY} stroke={lineColor} strokeWidth={lw} strokeLinecap="round" />
          </g>
        );
        validEdges.forEach((e, i) => {
          const b = positions[e.to];
          const bCenterX = b.x + b.w / 2;
          const y2 = b.y - gap;
          const path = `M ${bCenterX} ${branchY} L ${bCenterX} ${y2}`;
          connectors.push(renderEdge("e" + i, i, path, true, { x: bCenterX + 14, y: (branchY + y2) / 2 + 4 }, "start"));
        });
      }
    }
  }

  return (
    <svg ref={svgRef} width="100%" viewBox={`0 0 ${W} ${H}`} role="img" onClick={() => onSelectEdge(null)}>
      <title>{parsed.title}</title>
      <defs>
        {(() => {
          // 矢印マーカーのサイズを線の太さ(lw)に比例させる。線が太いほど矢印も大きくなり、
          // 細いほど小さくなることで、見た目のバランスが線の太さ設定と一致する。
          const markerSize = Math.min(16, Math.max(5, lw * 4.2));
          const refXY = markerSize * 0.7;
          const pathStroke = Math.max(1, lw * 0.9);
          const arrowPath = `M${markerSize * 0.2} ${markerSize * 0.1}L${markerSize * 0.8} ${markerSize * 0.5}L${markerSize * 0.2} ${markerSize * 0.9}`;
          return (
            <>
              <marker id="arrow" viewBox={`0 0 ${markerSize} ${markerSize}`} refX={refXY} refY={markerSize / 2} markerWidth={markerSize} markerHeight={markerSize} markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d={arrowPath} fill="none" stroke="#000000" strokeWidth={pathStroke} strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="arrow-inv" viewBox={`0 0 ${markerSize} ${markerSize}`} refX={refXY} refY={markerSize / 2} markerWidth={markerSize} markerHeight={markerSize} markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d={arrowPath} fill="none" stroke="#FFFFFF" strokeWidth={pathStroke} strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="arrow-sel" viewBox={`0 0 ${markerSize} ${markerSize}`} refX={refXY} refY={markerSize / 2} markerWidth={markerSize} markerHeight={markerSize} markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d={arrowPath} fill="none" stroke="#A32D2D" strokeWidth={pathStroke} strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </>
          );
        })()}
      </defs>
      {connectors}
      {nodes.map((n) => {
        const pos = positions[n.id];
        if (!pos) return null;
        const isConnectSource = connectMode && connectFrom === n.id;
        return (
          <EditableNode
            key={n.id}
            node={n}
            pos={pos}
            isParent={!!pos.isParent}
            isSelected={selectedId === n.id || isConnectSource}
            onSelect={(id) => { onSelect(id); }}
            style={style}
            connectMode={connectMode}
          />
        );
      })}
    </svg>
  );
});

const PATTERNS = [
  { key: "opposition", label: "対立", desc: "2つの立場を比べる" },
  { key: "containment", label: "包含", desc: "全体と部分を示す" },
  { key: "timeline", label: "時系列", desc: "出来事の流れを示す" },
  { key: "network", label: "相関", desc: "中心と関連を示す" },
  { key: "hierarchy", label: "階層", desc: "上下の構造を示す" },
  { key: "cycle", label: "循環", desc: "繰り返す流れを示す" }
];

function PatternIcon({ patternKey, color }) {
  const common = { fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (patternKey) {
    case "opposition":
      return (
        <svg width="32" height="20" viewBox="0 0 32 20">
          <rect x="2" y="4" width="11" height="12" rx="2" {...common} />
          <rect x="19" y="4" width="11" height="12" rx="2" {...common} />
        </svg>
      );
    case "containment":
      return (
        <svg width="32" height="20" viewBox="0 0 32 20">
          <rect x="2" y="2" width="28" height="16" rx="3" {...common} />
          <rect x="6" y="6" width="9" height="8" rx="1.5" {...common} />
          <rect x="17" y="6" width="9" height="8" rx="1.5" {...common} />
        </svg>
      );
    case "timeline":
      return (
        <svg width="32" height="20" viewBox="0 0 32 20">
          <rect x="1" y="7" width="7" height="6" rx="1.5" {...common} />
          <rect x="12.5" y="7" width="7" height="6" rx="1.5" {...common} />
          <rect x="24" y="7" width="7" height="6" rx="1.5" {...common} />
          <line x1="8" y1="10" x2="12.5" y2="10" {...common} />
          <line x1="19.5" y1="10" x2="24" y2="10" {...common} />
        </svg>
      );
    case "network":
      return (
        <svg width="32" height="20" viewBox="0 0 32 20">
          <circle cx="16" cy="10" r="3.4" {...common} />
          <circle cx="4" cy="4" r="2.4" {...common} />
          <circle cx="4" cy="16" r="2.4" {...common} />
          <circle cx="28" cy="4" r="2.4" {...common} />
          <circle cx="28" cy="16" r="2.4" {...common} />
          <line x1="13.5" y1="8.5" x2="6" y2="5" {...common} />
          <line x1="13.5" y1="11.5" x2="6" y2="15" {...common} />
          <line x1="18.5" y1="8.5" x2="26" y2="5" {...common} />
          <line x1="18.5" y1="11.5" x2="26" y2="15" {...common} />
        </svg>
      );
    case "hierarchy":
      return (
        <svg width="32" height="20" viewBox="0 0 32 20">
          <rect x="11" y="1" width="10" height="6" rx="1.5" {...common} />
          <rect x="1" y="13" width="9" height="6" rx="1.5" {...common} />
          <rect x="12" y="13" width="9" height="6" rx="1.5" {...common} />
          <rect x="23" y="13" width="8" height="6" rx="1.5" {...common} />
          <line x1="16" y1="7" x2="5.5" y2="13" {...common} />
          <line x1="16" y1="7" x2="16.5" y2="13" {...common} />
          <line x1="16" y1="7" x2="27" y2="13" {...common} />
        </svg>
      );
    case "cycle":
      return (
        <svg width="32" height="20" viewBox="0 0 32 20">
          <circle cx="16" cy="4" r="2.6" {...common} />
          <circle cx="27" cy="14" r="2.6" {...common} />
          <circle cx="5" cy="14" r="2.6" {...common} />
          <path d="M18.2 5.6 L24.6 12" {...common} />
          <path d="M24.4 14.6 L7.6 14.6" {...common} />
          <path d="M7.4 12 L13.8 5.6" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

export default function App() {
  const [history, setHistory] = useState([null]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const parsed = history[historyIndex];

  const [selectedId, setSelectedId] = useState(null);
  const [selectedEdgeIndex, setSelectedEdgeIndex] = useState(null);
  const [connectMode, setConnectMode] = useState(false);
  const [connectFrom, setConnectFrom] = useState(null);
  const [lineWidth, setLineWidth] = useState(1.5);
  const [radius, setRadius] = useState(8);
  const [invertColors, setInvertColors] = useState(false);
  const [density, setDensity] = useState(0.5);

  // キャンバスの拡大縮小・パン移動用の状態
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const handleZoomIn = () => setZoom((z) => Math.min(3, Math.round((z + 0.2) * 10) / 10));
  const handleZoomOut = () => setZoom((z) => Math.max(0.3, Math.round((z - 0.2) * 10) / 10));

  const handleCanvasMouseDown = (e) => {
    // ノードや線のクリック判定はDiagramCanvas側のonClickで処理されるので、
    // ここでは背景部分のドラッグのみ手のひらツールとして扱う。
    setIsPanning(true);
    panStartRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  };
  const handleCanvasMouseMove = (e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStartRef.current.x;
    const dy = e.clientY - panStartRef.current.y;
    setPan({ x: panStartRef.current.panX + dx, y: panStartRef.current.panY + dy });
  };
  const handleCanvasMouseUp = () => {
    setIsPanning(false);
  };

  const style = { lineWidth, radius, iconSize: 20, invert: invertColors, density };
  const svgRef = useRef(null);

  const handleDownloadPng = () => {
    // 選択中(赤枠)の状態がPNGに写り込んでしまうため、先に選択を解除してから
    // 再レンダリングが反映されるのを待って実際のキャプチャ処理を行う。
    const hadSelection = selectedId !== null || selectedEdgeIndex !== null;
    setSelectedId(null);
    setSelectedEdgeIndex(null);

    const runCapture = () => {
      const svgEl = svgRef.current;
      if (!svgEl) return;
      const viewBox = svgEl.getAttribute("viewBox") || "0 0 760 400";
      const [, , vbW, vbH] = viewBox.split(" ").map(Number);
      const scale = 2;
      const clone = svgEl.cloneNode(true);
      clone.setAttribute("width", vbW);
      clone.setAttribute("height", vbH);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      // 書き出すテキストのフォントを明示指定する。指定しないと環境のデフォルト(明朝体など)に
      // フォールバックすることがあるため、見出し・本文どちらもゴシック系で統一する。
      const fontFamily = "Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif";
      clone.querySelectorAll("text, tspan").forEach((t) => {
        t.setAttribute("font-family", fontFamily);
      });
      const bgColor = invertColors ? "#1A1A1A" : "#FFFFFF";
      const svgString = new XMLSerializer().serializeToString(clone);
      // Blob URL経由のImage読み込みは環境によってブロックされることがあるため、
      // data URI(base64)に変換して読み込む。日本語テキストを含むためUTF-8セーフな
      // エンコード(encodeURIComponent経由)を使う。
      const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
      const dataUri = `data:image/svg+xml;base64,${svgBase64}`;
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = vbW * scale;
          canvas.height = vbH * scale;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            if (!blob) {
              window.alert("PNGの生成に失敗した。お手数だがもう一度試してほしい。");
              return;
            }
            const a = document.createElement("a");
            const dlUrl = URL.createObjectURL(blob);
            a.href = dlUrl;
            a.download = `${(parsed && parsed.title) || "diagram"}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(dlUrl);
          });
        } catch (err) {
          window.alert("PNGの生成に失敗した: " + err.message);
        }
      };
      img.onerror = () => {
        window.alert("画像の読み込みに失敗した。お手数だがもう一度試してほしい。");
      };
      img.src = dataUri;
    };

    if (hadSelection) {
      // 選択解除によるReactの再レンダリングが画面に反映されるのを待つ。
      setTimeout(runCapture, 50);
    } else {
      runCapture();
    }
  };

  const updateParsed = (next) => {
    setHistory((h) => {
      const trimmed = h.slice(0, historyIndex + 1);
      return [...trimmed, next];
    });
    setHistoryIndex((i) => i + 1);
  };

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const handleUndo = () => {
    if (!canUndo) return;
    setHistoryIndex((i) => i - 1);
    setSelectedId(null);
    setSelectedEdgeIndex(null);
  };
  const handleRedo = () => {
    if (!canRedo) return;
    setHistoryIndex((i) => i + 1);
    setSelectedId(null);
    setSelectedEdgeIndex(null);
  };

  const handlePickTemplate = (patternKey) => {
    updateParsed(emptyTemplate(patternKey));
    setSelectedId(null);
    setSelectedEdgeIndex(null);
    setConnectMode(false);
    setConnectFrom(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleToggleDirection = () => {
    if (!parsed) return;
    updateParsed({ ...parsed, direction: parsed.direction === "vertical" ? "horizontal" : "vertical" });
  };

  const updateSelectedNode = (field, value) => {
    if (!parsed || !selectedId) return;
    const newNodes = parsed.nodes.map((n) => (n.id === selectedId ? { ...n, [field]: value } : n));
    updateParsed({ ...parsed, nodes: newNodes });
  };

  const handleAddNode = () => {
    if (!parsed) return;
    updateParsed(addNode(parsed));
  };

  const handleRemoveSelected = () => {
    if (!parsed || !selectedId) return;
    updateParsed(removeNode(parsed, selectedId));
    setSelectedId(null);
  };

  const handleChangeEdgeTarget = (edgeIndex, field, newTargetId) => {
    if (!parsed) return;
    const newEdges = parsed.edges.map((e, i) => (i === edgeIndex ? { ...e, [field]: newTargetId } : e));
    updateParsed({ ...parsed, edges: newEdges });
  };

  const handleDeleteSelectedEdge = () => {
    if (!parsed || selectedEdgeIndex === null) return;
    const newEdges = parsed.edges.filter((_, i) => i !== selectedEdgeIndex);
    updateParsed({ ...parsed, edges: newEdges });
    setSelectedEdgeIndex(null);
  };

  const handleToggleConnectMode = () => {
    setConnectMode((v) => !v);
    setConnectFrom(null);
    setSelectedId(null);
    setSelectedEdgeIndex(null);
  };

  const handleVsLabelChange = (value) => {
    if (!parsed) return;
    updateParsed({ ...parsed, vsLabel: value });
  };

  const handleNodeClickInCanvas = (nodeId) => {
    if (!connectMode) {
      setSelectedId(nodeId);
      setSelectedEdgeIndex(null);
      return;
    }
    if (!connectFrom) {
      setConnectFrom(nodeId);
      return;
    }
    if (connectFrom === nodeId) {
      setConnectFrom(null);
      return;
    }
    const exists = parsed.edges.some((e) => e.from === connectFrom && e.to === nodeId);
    if (!exists) {
      const newEdges = [...parsed.edges, { from: connectFrom, to: nodeId, strength: 1 }];
      updateParsed({ ...parsed, edges: newEdges });
    }
    setConnectFrom(null);
  };

  const selectedNode = parsed && selectedId ? parsed.nodes.find((n) => n.id === selectedId) : null;
  const isSelectedParent = parsed && parsed.pattern === "containment" && parsed.nodes[0] && parsed.nodes[0].id === selectedId;

  const FIELD_BG = "#FFFFFF";
  const FIELD_TEXT = "#0F1B2D";
  const FIELD_BORDER = "#C7D2E0";
  const fieldStyle = {
    width: "100%", padding: "9px 13px", borderRadius: 10,
    border: `1.5px solid ${FIELD_BORDER}`, background: FIELD_BG,
    color: FIELD_TEXT, fontSize: 14, boxSizing: "border-box"
  };
  const sectionCard = {
    padding: 20, borderRadius: 16, border: "1px solid #E1E6EE", background: "#FFFFFF",
    marginBottom: 18, boxShadow: "0 1px 2px rgba(20, 40, 80, 0.04)"
  };
  const sectionLabel = { fontSize: 12, fontWeight: 700, color: "#5B72A0", letterSpacing: "0.06em", marginBottom: 12, textTransform: "uppercase" };
  const toolBtn = (active) => ({
    padding: "8px 15px", borderRadius: 10,
    border: `1.5px solid ${active ? "#2952CC" : "#C7D2E0"}`,
    background: active ? "#2952CC" : "#FFFFFF",
    color: active ? "#FFFFFF" : "#1C2B45",
    fontSize: 13, fontWeight: 600, cursor: "pointer",
    transition: "background 0.12s, border-color 0.12s"
  });
  const dangerBtn = {
    padding: "8px 15px", borderRadius: 10, border: "1.5px solid #D64550",
    background: "#FFFFFF", color: "#C23B45", fontSize: 13, fontWeight: 600, cursor: "pointer"
  };
  const primaryBtn = {
    padding: "10px 18px", borderRadius: 10, border: "none",
    background: "linear-gradient(135deg, #2952CC, #3B6FE0)", color: "#FFFFFF",
    fontSize: 14, fontWeight: 700, cursor: "pointer",
    boxShadow: "0 2px 6px rgba(41, 82, 204, 0.35)"
  };

  const selectedEdge = parsed && selectedEdgeIndex !== null ? parsed.edges[selectedEdgeIndex] : null;

  const edgeEditBlock = selectedEdge && (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <label style={{ fontSize: 12, color: "#5B72A0", display: "block", marginBottom: 5, fontWeight: 600 }}>線のテキスト</label>
        <textarea
          value={selectedEdge.label || ""}
          onChange={(e) => handleChangeEdgeTarget(selectedEdgeIndex, "label", e.target.value)}
          style={{ ...fieldStyle, minHeight: 70, resize: "vertical", fontFamily: "var(--font-sans)" }}
        />
      </div>
      <div>
        <button onClick={handleDeleteSelectedEdge} style={dangerBtn}>この線を削除</button>
      </div>
    </div>
  );

  const editPanel = (
    <div style={{ ...sectionCard, opacity: (selectedNode || selectedEdge) ? 1 : 0.45, transition: "opacity 0.15s", position: "sticky", top: 16 }}>
      <div style={sectionLabel}>{selectedEdge ? "線の編集" : "要素の編集"}</div>
      {selectedEdge ? edgeEditBlock : selectedNode ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={{ fontSize: 12, color: "#5B72A0", display: "block", marginBottom: 5, fontWeight: 600 }}>見出し</label>
            <textarea value={selectedNode.label} onChange={(e) => updateSelectedNode("label", e.target.value)} style={{ ...fieldStyle, minHeight: 44, resize: "vertical", fontFamily: "var(--font-sans)" }} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "#5B72A0", display: "block", marginBottom: 5, fontWeight: 600 }}>説明文</label>
            <textarea value={selectedNode.sublabel || ""} onChange={(e) => updateSelectedNode("sublabel", e.target.value)} style={{ ...fieldStyle, minHeight: 44, resize: "vertical", fontFamily: "var(--font-sans)" }} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "#5B72A0", display: "block", marginBottom: 5, fontWeight: 600 }}>アイコン</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
              {ICON_OPTIONS.map((opt) => {
                const active = (selectedNode.icon || "") === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => updateSelectedNode("icon", opt.key)}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                      padding: "8px 4px", borderRadius: 8,
                      border: `1.5px solid ${active ? "#2952CC" : "#C7D2E0"}`,
                      background: active ? "#2952CC" : "#FFFFFF",
                      cursor: "pointer"
                    }}
                  >
                    {opt.key === "" ? (
                      <div style={{ width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: active ? "#FFFFFF" : "#5B72A0" }}>—</div>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 16 16">
                        <NodeIcon icon={opt.key} x={0} y={0} size={16} color={active ? "#FFFFFF" : "#1C2B45"} />
                      </svg>
                    )}
                    <span style={{ fontSize: 10, fontWeight: 600, color: active ? "#FFFFFF" : "#1C2B45" }}>{opt.label}</span>
                  </button>
                );
              })}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginTop: 6 }}>
              {ICON_OPTIONS_COMPACT.map((opt) => {
                const active = (selectedNode.icon || "") === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => updateSelectedNode("icon", opt.key)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "6px 2px", borderRadius: 6,
                      border: `1.5px solid ${active ? "#2952CC" : "#C7D2E0"}`,
                      background: active ? "#2952CC" : "#FFFFFF",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <NodeIcon icon={opt.key} x={0} y={0} size={16} color={active ? "#FFFFFF" : "#1C2B45"} />
                    </svg>
                  </button>
                );
              })}
            </div>
            {selectedNode.icon && (
              <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                {[{ k: "small", label: "小" }, { k: "medium", label: "中" }, { k: "large", label: "大" }].map((opt) => (
                  <button key={opt.k} onClick={() => updateSelectedNode("iconSize", opt.k)} style={toolBtn((selectedNode.iconSize || "medium") === opt.k)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label style={{ fontSize: 12, color: "#5B72A0", display: "block", marginBottom: 6, fontWeight: 600 }}>見た目</label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              {!isSelectedParent && (
                <div style={{ display: "flex", gap: 4 }}>
                  <button onClick={() => updateSelectedNode("shape", "rect")} style={toolBtn((selectedNode.shape || "rect") === "rect")}>四角</button>
                  <button onClick={() => updateSelectedNode("shape", "circle")} style={toolBtn(selectedNode.shape === "circle")}>円</button>
                </div>
              )}
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
              <button onClick={() => updateSelectedNode("headingStyle", !selectedNode.headingStyle)} style={{ ...toolBtn(selectedNode.headingStyle), fontWeight: 700 }}>
                見出し大
              </button>
              <button onClick={() => updateSelectedNode("emphasis", !selectedNode.emphasis)} style={toolBtn(selectedNode.emphasis)}>
                強調（色反転）
              </button>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#5B72A0" }}>背景</span>
              {[{ k: "white", label: "白" }, { k: "light", label: "薄グレー" }, { k: "dark", label: "濃グレー" }].map((opt) => (
                <button
                  key={opt.k}
                  onClick={() => updateSelectedNode("bg", opt.k)}
                  disabled={!!selectedNode.emphasis}
                  style={{
                    ...toolBtn((selectedNode.bg || "white") === opt.k),
                    opacity: selectedNode.emphasis ? 0.4 : 1,
                    cursor: selectedNode.emphasis ? "default" : "pointer"
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <button onClick={handleRemoveSelected} disabled={parsed && parsed.nodes.length <= 2} style={{ ...dangerBtn, opacity: parsed && parsed.nodes.length <= 2 ? 0.4 : 1, cursor: parsed && parsed.nodes.length <= 2 ? "default" : "pointer" }}>
              この要素を削除
            </button>
          </div>

          {parsed && parsed.edges && parsed.edges.length > 0 && (
            <div style={{ marginTop: 4, paddingTop: 16, borderTop: "1px solid #DCE5F0" }}>
              <label style={{ fontSize: 12, color: "#5B72A0", display: "block", marginBottom: 8, fontWeight: 600 }}>線のつなぎ先を変更</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {parsed.edges.map((e, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
                    <select value={e.from} onChange={(ev) => handleChangeEdgeTarget(i, "from", ev.target.value)} style={{ ...fieldStyle, width: "auto", padding: "6px 8px" }}>
                      {parsed.nodes.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
                    </select>
                    <span style={{ color: "#5B72A0" }}>→</span>
                    <select value={e.to} onChange={(ev) => handleChangeEdgeTarget(i, "to", ev.target.value)} style={{ ...fieldStyle, width: "auto", padding: "6px 8px" }}>
                      {parsed.nodes.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p style={{ fontSize: 13, color: "#5B72A0", margin: 0 }}>
          図の中の要素をクリックすると、見出し・説明文・アイコン・見た目を編集できる。
        </p>
      )}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#F1F5F9", fontFamily: "var(--font-sans)", padding: "1.5rem" }}>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start", maxWidth: 1680, margin: "0 auto" }}>

        {/* 左サイドバー：パターン選択（縦リストカード） */}
        <div style={{ flex: "0 0 240px", display: "flex", flexDirection: "column", gap: 10 }}>
          {PATTERNS.map((p) => {
            const active = parsed && parsed.pattern === p.key;
            return (
              <button
                key={p.key}
                onClick={() => handlePickTemplate(p.key)}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                  padding: "16px 12px", borderRadius: 14,
                  border: active ? "2px solid #2952CC" : "1px solid #E1E6EE",
                  background: active ? "#2952CC" : "#FFFFFF",
                  cursor: "pointer",
                  boxShadow: active ? "0 4px 10px rgba(41, 82, 204, 0.25)" : "0 1px 2px rgba(20, 40, 80, 0.04)",
                  transition: "background 0.12s, border-color 0.12s"
                }}
              >
                <PatternIcon patternKey={p.key} color={active ? "#FFFFFF" : "#1C2B45"} />
                <span style={{ fontSize: 15, fontWeight: 700, color: active ? "#FFFFFF" : "#1C2B45" }}>{p.label}</span>
                <span style={{ fontSize: 12, color: active ? "#DCE5F0" : "#8A95AC", textAlign: "center" }}>{p.desc}</span>
              </button>
            );
          })}
        </div>

        {/* 中央：ツールバー + キャンバス */}
        <div style={{ flex: "1 1 auto", minWidth: 0 }}>
          {parsed && (
            <div>
              <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  <button onClick={handleUndo} disabled={!canUndo} style={{ ...toolBtn(false), opacity: canUndo ? 1 : 0.35, cursor: canUndo ? "pointer" : "default" }}>← 戻す</button>
                  <button onClick={handleRedo} disabled={!canRedo} style={{ ...toolBtn(false), opacity: canRedo ? 1 : 0.35, cursor: canRedo ? "pointer" : "default" }}>進む →</button>
                </div>
                <div style={{ width: 1, height: 20, background: "#D6DCE8" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <label style={{ fontSize: 12, color: "#5B72A0" }}>線の太さ</label>
                  <input type="range" min="0.5" max="4" step="0.5" value={lineWidth} onChange={(e) => setLineWidth(Number(e.target.value))} style={{ width: 90 }} />
                  <span style={{ fontSize: 12, color: "#5B72A0", width: 24 }}>{lineWidth}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <label style={{ fontSize: 12, color: "#5B72A0" }}>角丸</label>
                  <input type="range" min="0" max="28" step="2" value={radius} onChange={(e) => setRadius(Number(e.target.value))} style={{ width: 90 }} />
                  <span style={{ fontSize: 12, color: "#5B72A0", width: 24 }}>{radius}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <label style={{ fontSize: 12, color: "#5B72A0" }}>密度</label>
                  <input type="range" min="0" max="1" step="0.25" value={density} onChange={(e) => setDensity(Number(e.target.value))} style={{ width: 90 }} />
                  <span style={{ fontSize: 12, color: "#5B72A0", width: 24 }}>{Math.round(density * 4) + 1}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
                <button onClick={handleAddNode} style={toolBtn(false)}>＋ 要素を追加</button>
                {parsed.pattern !== "opposition" && (
                  <button onClick={handleToggleConnectMode} style={toolBtn(connectMode)}>
                    {connectMode ? (connectFrom ? "つなぎ先をクリック" : "つなぐ要素をクリック") : "線をつなぐ"}
                  </button>
                )}
                {(parsed.pattern === "timeline" || parsed.pattern === "opposition" || (parsed.pattern === "cycle" && parsed.nodes.length <= 4) || parsed.pattern === "hierarchy") && (
                  <button onClick={handleToggleDirection} style={toolBtn(false)}>
                    {parsed.direction === "vertical" ? "横に並べる" : "縦に並べる"}
                  </button>
                )}
                <div style={{ flex: 1 }} />
                <button onClick={() => setInvertColors((v) => !v)} style={toolBtn(invertColors)}>
                  白黒反転
                </button>
              </div>

              {parsed.pattern === "opposition" && (
                <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  <label style={{ fontSize: 12, color: "#5B72A0" }}>中央の文字</label>
                  <textarea value={parsed.vsLabel || ""} onChange={(e) => handleVsLabelChange(e.target.value)} style={{ ...fieldStyle, width: 160, minHeight: 50, resize: "vertical", fontFamily: "var(--font-sans)" }} />
                </div>
              )}

              <div
                style={{
                  padding: 24, border: "1px solid #E1E6EE", borderRadius: 16,
                  background: invertColors ? "#1A1A1A" : "#FFFFFF", minHeight: 540,
                  boxShadow: "0 1px 2px rgba(20, 40, 80, 0.04)", position: "relative",
                  overflow: "hidden", cursor: isPanning ? "grabbing" : "grab"
                }}
                onMouseDown={handleCanvasMouseDown}
                onMouseMove={handleCanvasMouseMove}
                onMouseUp={handleCanvasMouseUp}
                onMouseLeave={handleCanvasMouseUp}
              >
                <div
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: "center center",
                    transition: isPanning ? "none" : "transform 0.1s"
                  }}
                >
                  <DiagramCanvas
                    ref={svgRef}
                    parsed={parsed}
                    style={style}
                    selectedId={selectedId}
                    onSelect={handleNodeClickInCanvas}
                    selectedEdgeIndex={selectedEdgeIndex}
                    onSelectEdge={setSelectedEdgeIndex}
                    connectMode={connectMode}
                    connectFrom={connectFrom}
                  />
                </div>
                <div style={{ position: "absolute", bottom: 16, right: 16, display: "flex", gap: 6 }}>
                  <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} style={toolBtn(false)}>−</button>
                  <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} style={toolBtn(false)}>＋</button>
                </div>
              </div>

              <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleDownloadPng} style={{ ...primaryBtn, display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
                    <polyline points="3.38 9.52 3.38 12.08 12.62 12.08 12.62 9.52" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.95" />
                    <line x1="8" y1="3.92" x2="8" y2="9.68" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.95" />
                    <polyline points="10.22 7.46 8 9.68 5.78 7.46" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.95" />
                  </svg>
                  PNG画像でダウンロードする
                </button>
              </div>
            </div>
          )}
          {!parsed && (
            <div style={{ padding: 60, textAlign: "center", color: "#8A95AC", fontSize: 14, border: "1px dashed #C7D2E0", borderRadius: 16, background: "#FFFFFF" }}>
              左の一覧から図のパターンを選んで開始する。
            </div>
          )}
        </div>

        {/* 右サイドバー：ロゴ + 編集パネル */}
        <div style={{ flex: "0 0 300px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ padding: "4px 0" }}>
            <img src={LOGO_DATA_URI} alt="図解ツクール" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          {editPanel}
        </div>

      </div>

      <div style={{ textAlign: "center", marginTop: 32, padding: "12px 0", fontSize: 11, color: "#9AA5B8" }}>
        このツールで作成した図解は商用利用可能です。問い合わせはms5575872@gmail.comまでお願いします。
      </div>
    </div>
  );
}
