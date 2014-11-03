# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 1.3.5"

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

     config.vm.box = "precise32"
     config.vm.box_url = "http://files.vagrantup.com/precise32.box"

    # Use vagrant-cachier or similar if available (https://github.com/fgrehm/vagrant-cachier)
    config.cache.auto_detect = true

    # Shell provisioning script
    config.vm.provision :shell, :path => "vagrantBootstrap/bootstrap.sh"

    config.vm.network :private_network, ip: "192.168.10.5"

    # Share an additional folder to the guest VM. The first argument is
    # the path on the host to the actual folder. The second argument is
    # the path on the guest to mount the folder. And the optional third
    # argument is a set of non-required options.
    # config.vm.synced_folder "../data", "/vagrant_data"

    # Share folder over NFS (option ignored automatically by Vagrant for Windows)
    config.vm.synced_folder ".", "/vagrant", :nfs => true

end