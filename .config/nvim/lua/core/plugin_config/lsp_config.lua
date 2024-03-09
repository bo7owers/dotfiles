require("mason").setup()
require("mason-lspconfig").setup({
	ensure_installed = { "cssls", "cssmodules_ls", "denols", "astro", "bashls", "emmet_ls", "graphql", "html", "jsonls", "quick_lint_js", "tsserver", "lua_ls", "marksman", "intelephense", "rust_analyzer", "sqlls", "svelte", "tailwindcss", "volar", "lemminx", "yamlls", "biome" }
})

local on_attach = function(_, _)
	vim.keymap.set ('n','<leader>rn', vim.lsp.buf .rename, {})
vim.keymap.set ('n','<leader>ca', vim. lsp.buf .code_action, {})

vim.keymap.set ('n','gd', vim.lsp.buf.definition, {})
vim.keymap.set('n','gi', vim.lsp.buf. implementation, {})
vim.keymap. set('n', 'gr', require ('telescope.builtin').lsp_references, {})
vim.keymap.set ('n', 'K', vim.lsp.buf. hover, {})
end

require("lspconfig").emmet_ls.setup{
	on_attach = on_attach
}
require("lspconfig").tsserver.setup{
	on_attach = on_attach
}
require("lspconfig").jsonls.setup{
	on_attach = on_attach
}
require("lspconfig").volar.setup{
	on_attach = on_attach
}
require("lspconfig").cssls.setup{
	on_attach = on_attach
}
require("lspconfig").cssmodules_ls.setup{
	on_attach = on_attach
}
require("lspconfig").tailwindcss.setup{
	on_attach = on_attach
}
require("lspconfig").html.setup{
	on_attach = on_attach
}
require("lspconfig").jsonls.setup{
	on_attach = on_attach
}
require("lspconfig").lua_ls.setup{
	on_attach = on_attach
}
require("lspconfig").rust_analyzer.setup{
	on_attach = on_attach
}
