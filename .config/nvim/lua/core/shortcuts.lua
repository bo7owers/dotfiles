-- thanks to Heiker Curiel
-- https://vonheikemen.github.io/devlog/tools/build-your-first-lua-config-for-neovim/
-- line numbers
vim.opt.number = true

-- enable mouse support
vim.opt.mouse = 'a'

--case search 
vim.opt.ignorecase = true
vim.opt.smartcase = true

-- hide text highlight on search
vim.opt.hlsearch = false

-- text
vim.opt.wrap = true
vim.opt.breakindent = true
vim.opt.tabstop = 3 -- maybe change to 2
vim.opt.shiftwidth = 3 -- this should match tabstop
