<template>
	<div>
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="modal-header">
							<slot name="header">
								default header
							</slot>
						</div>
						<div class="modal-body">
							<slot name="body">
								<table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Header</th>
											<th>Body</th>
											<th>Footer</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td ref="le">Data1</td>
											<td>Data2</td>
											<td>Data3</td>
											<td>Data4</td>
										</tr>
									</tbody>
								</table>
							</slot>
						</div>
						<div class="modal-footer">
							<slot name="footer">
								<button class="modal-default-button" @click="$emit('close')">取消</button>
								<button class="modal-default-button" @click="getData">确定</button>
							</slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default{
		methods:{
			getData(){
				console.info(this.$refs.le.innerHTML)
			}
		}
	}
</script>

<style>
	
</style>